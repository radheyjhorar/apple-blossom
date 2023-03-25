const { institutionsDB, globalMastersDB } = require("../../models");
const Institution_contact = institutionsDB.institution_contact;
const Jobs = institutionsDB.job;
const Op = institutionsDB.Sequelize.Op;
const Sequelize = require("sequelize");


  
// Retrieve all Cities from the database.
exports.findAll = async (req, res) => {
  try {
       let where = { is_active: 1};   
        
       
       
      
       // ;
      //console.log(boards);
      //arr.push
      /*await institutionsDB.sequelize.query('select ic.name, ic.website, ic.approx_fees, ip.est_year, ip.noofstudents, ip.noofteachers, ip.age_group, ip.school_areas,' 
      + ' ip.short_desc, ip.long_desc, c.name as city, s.name as state, cs.name as country '
      + ' from `institution-contacts` as ic ' 
      + ' Left JOIN `institution-profiles` ip on ic.id = ip.inst_id'
    //  + ' Left JOIN `institution_boards` ib on ic.id = ib.inst_id' 
      + ' Left JOIN `waytoedu_global_masters`. `cities` c on ic.city_id = c.id' 
      + ' Left JOIN `waytoedu_global_masters`. `states` s on ic.state_id = s.id'
      + ' Left JOIN `waytoedu_global_masters`. `countries` cs on ic.country_id = cs.id'
      //+ ' Left JOIN `waytoedu_global_masters`. `boards` b on b.id =  ib.board_id'
      + ' WHERE ic.is_active = 1 ', { type: Sequelize.QueryTypes.SELECT }
      ) */
      Jobs.findAll({
       attributes: ['id', 'post', 'exp', 'age_limit', 'salary', 'sdate', 'edate', 'is_active'],
       where: where,
          include: [{
            model: Institution_contact,
            attributes: ['name']            
          }
          
        ]
      })
      
      .then((jobs) => {
          //const insitIds = institution
          //return res.status(200).json([institution,boards])
          return res.status(200).json([jobs])
    
      });
      // await Institution_contact.findOne({ 
      //   where: { is_active: 1 }, 
      //   include: [
      //     {
      //       model: City,
      //       as: 'cities',
      //       on: {
      //         // this is where magic happens
      //         city_id: Sequelize.literal("`institution-contacts`.`city_id` = `waytoedu_global_masters`.`cities`.`id`") 
      //       }
      //     }
      //     ] 
      // }).then(data => {
      //   res.send(data);
      // });
      
   
   } catch(err) {
     console.log(err);
     return res.status(500).json({'error': 'internal server error'})
   
   }
};

// Find a single City with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Jobs.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Jobs with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Jobs with id=" + id
      });
    });
};






