const { globalMastersDB } = require("../models");
const customer = globalMastersDB.customer;
const cities = globalMastersDB.cities;
const Op = globalMastersDB.Sequelize.Op;

 
// Retrieve all Cities from the database.
exports.findAll = async (req, res) => {
  try {
       
       let where =  ' WHERE ic.is_active = 1 ';   
       let boards, med, boarding_types, sub_types;
       if(req.body.cp == 'search') {
          boards = await globalMastersDB.sequelize.query("select b.id, b.name from `waytoedu_global_masters`. `boards` as b  where  is_active = 1", { type: Sequelize.QueryTypes.SELECT })
          med = await globalMastersDB.sequelize.query("select m.id, m.name from `waytoedu_global_masters`. `mediums` as m where is_active = 1 ", { type: Sequelize.QueryTypes.SELECT })

          boarding_types = await globalMastersDB.sequelize.query("select bt.id, bt.name from `waytoedu_global_masters`. `boarding_types` as bt  where is_active = 1", { type: Sequelize.QueryTypes.SELECT });
          sub_types = await globalMastersDB.sequelize.query("select st.id, st.name from `waytoedu_global_masters`. `instit_subtypes` as st  where is_active = 1", { type: Sequelize.QueryTypes.SELECT });
        }
       

       cityName = req.body.cityName;
       if(cityName !== undefined) {
         try {
            const City = await globalMastersDB.sequelize.query(
            "select id from `waytoedu_global_masters`.`cities` where name = :city_name", {
              replacements: { city_name: cityName },
              type: Sequelize.QueryTypes.SELECT
            });

          if(City.length > 0) {
            where += ' AND ic.city_id = ' + City[0].id;
            // console.log(where)
          }
        } catch(e) {
          console.log(e);  
        }
       }

       let Boards = req.body.Boards;
       if(Boards !== undefined && Boards.length > 0)  {
         try {
            const query = "select distinct inst_id from `waytoeduinstitutions`.`institution_boards` where board_id IN (" +
            Boards.join(', ') + ") order by inst_id asc";
            const institution_boards = await institutionsDB.sequelize.query(query
            ,{
              type: Sequelize.QueryTypes.SELECT
            });
            if(institution_boards !== undefined && institution_boards.length > 0){
              where += ' AND ic.id IN (';
              institution_boards.map((e,i) => { where += (i+1) < institution_boards.length?e.inst_id  + ', ':e.inst_id })
              where += ')';
            }
        } catch(e) {
          console.log(e);  
        }
       }

       let subTypes = req.body.subTypes;
       if(subTypes !== undefined && subTypes.length > 0) {
         try {
            
            where += ' AND ip.subtype_id IN (';
            subTypes.forEach((id, i) => {
                where +=  id;
                where += ((i+1) < subTypes.length)?', ':')';
            });
          
        } catch(e) {
          console.log(e);
        }
       }



       schoolId = req.body.schoolId;
       if(schoolId !== undefined && schoolId.length > 0) {
             
              where += " AND ic.link = '" + schoolId + "' ";     
              // console.log(where)  
       }

       let approx_fees = req.body.approx_fees;
       if(approx_fees !== undefined && approx_fees.length > 0) {
             
              where += " AND (ip.approx_fees BETWEEN  " + approx_fees[0] + " AND " + approx_fees[1] + ")";     
              // console.log(where)  
       }

       let boardingTypes = req.body.boardingTypes;
       if(boardingTypes !== undefined && boardingTypes.length > 0) {
          where += ' AND ip.boarding_type_id IN (';
          boardingTypes.forEach((id, i) => {
              where +=  id;
              where += ((i+1) < boardingTypes.length)?', ':')';
          });
                  
       }

       

       let admOpenJoin = ''
       if( req.body.admOpen === 1) {             
        where += ' AND iadm.start_date <= CURDATE() AND iadm.end_date >= CURDATE() ' ;     
        admOpenJoin = ' Left JOIN `institution_admissions` iadm on ic.id = iadm.inst_id '
        // console.log(where)  
      }

      

      if(req.body.isFeaturedSchool === 1) {             
       where += ' AND ip.featured_school = 1' ;
      //  console.log(where)  
      }

     
     if(req.body.in_spotlight === 1) {             
      where += ' AND ip.in_spotlight = 1' ;
     //  console.log(where)  
     }

      if(req.body.in_spotlight === 1) {             
        where += ' AND ip.top_school = 1' ;
      //  console.log(where)  
      }
      
       let page = req.body.page || 1 
       let limit = req.body.limit || 10;
       let offset = ((page-1)*limit);

      const institution = await institutionsDB.sequelize.query('select distinct ic.id, ic.name, ic.link, c.name as city_name, '
      + 'ip.mobile1, ip.mobile2, ip.email1, ip.email2, ip.address1, ip.address2, ip.address3, ip.est_year, ip.desc, ip.noofstudents, ip.noofteachers, ip.approx_fees'
      + ', ip.featured_school, ip.in_spotlight, ip.top_school'
      + ' from `waytoeduinstitutions`.`institution-contacts` as ic ' 
      + ' Left JOIN `waytoeduinstitutions`.`institution-profiles` ip on ic.id = ip.inst_id'
      + ' Left JOIN `waytoedu_global_masters`.`cities` c on ic.city_id = c.id '
      + admOpenJoin
       // + ' Left JOIN `institution_mediums` im on ic.id = im.inst_id'
      // + ' Right JOIN `institution_boards` ib on ic.id = ib.inst_id'
      // + ' Left JOIN `institution_mediums` im on ic.id = im.inst_id'
      // + ' Left JOIN `institution_admissions` ia on ic.id = ia.inst_id'
      // + ' Left JOIN `inst_languages` il on ic.id = il.inst_id'
      // + ' Left JOIN `instit_facilities` ifac on ic.id = ifac.inst_id'
      +  where  + ' GROUP BY ic.id '
      + " Limit " + offset + ", " + limit, { type: Sequelize.QueryTypes.SELECT }
      );
      let inst_id = [];

      await Promise.all(institution.map( async (x, index) => { 
        // const instAdmissions = await globalMastersDB.sequelize.query("select b.name from  `waytoeduinstitutions`.`institution_boards` as ib \
        // Left JOIN `waytoedu_global_masters`. `boards` as b ON ib.board_id = b.id where  ib.inst_id = " + x.id , { type: Sequelize.QueryTypes.SELECT })
        const instBoard = await globalMastersDB.sequelize.query("select b.name from  `waytoeduinstitutions`.`institution_boards` as ib \
        Left JOIN `waytoedu_global_masters`. `boards` as b ON ib.board_id = b.id where  ib.inst_id = " + x.id , { type: Sequelize.QueryTypes.SELECT })
         const instMedium = await globalMastersDB.sequelize.query("select m.name from  `waytoeduinstitutions`.`institution_mediums` as im \
         Left JOIN `waytoedu_global_masters`.`mediums` as m ON im.medium_id = m.id where  im.inst_id = " + x.id , { type: Sequelize.QueryTypes.SELECT })
        // const instBoard = await globalMastersDB.sequelize.query("select b.name from  `waytoeduinstitutions`.`institution_boards` as ib \
        // Left JOIN `waytoedu_global_masters`. `boards` as b ON ib.board_id = b.id where  ib.inst_id = " + x.id , { type: Sequelize.QueryTypes.SELECT })
        // const instAdmissions = await globalMastersDB.sequelize.query("select b.name from  `waytoeduinstitutions`.`institution_boards` as ib \
        // Left JOIN `waytoedu_global_masters`. `boards` as b ON ib.board_id = b.id where  ib.inst_id = " + x.id , { type: Sequelize.QueryTypes.SELECT })
        // const instAdmissions = await globalMastersDB.sequelize.query("select b.name from  `waytoeduinstitutions`.`institution_boards` as ib \
        // Left JOIN `waytoedu_global_masters`. `boards` as b ON ib.board_id = b.id where  ib.inst_id = " + x.id , { type: Sequelize.QueryTypes.SELECT })
        
        institution[index].inst_board = instBoard;
        institution[index].inst_medium = instMedium;       
    })).then(() => {
      if(req.body.cp == 'search') {
        return res.status(200).json([institution, boards, med, boarding_types, sub_types])
      } else {
        return res.status(200).json([institution])
      }
    })


   
   
   } catch(err) {
     console.log(err);
     return res.status(500).json({'error': 'internal server error'})
   
   }
};
