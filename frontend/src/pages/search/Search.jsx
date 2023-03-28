import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Boards } from '../../components';
import api from '../../api/API';
import { useFilter } from '../../contexts/filter-context';
//import { faIgloo } from '@fortawesome/free-solid-svg-icons';

import './search.css';
import { SrcSchlImg, SrcAdImg, SrcAdImg2} from "../../assets";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


function Search(props) {
  //const [fromDB, setFromDB] =  useState(true);
  const [data, setData] = useState([]);
  const [boards, setBoards] = useState([]);
  const [mediums, setMediums] = useState([]);
  const [boardingTypes, setBoardingTypes] = useState([]);
  const [subTypes, setSubTypes] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const { state } = useFilter();

  let { cityName } = useParams();


  const ResetFilterHandler = (() => {
    console.log('Reset Filter');
  });



  useEffect(() => {
    setIsLoading(true);
    console.log(cityName);
    const fetchData = async (cityName) => {
      const postSearch = {
        cityName: cityName,
        boardingTypes: state.boarding_types,
        subTypes: state.school_level,
        Boards: state.school_boards,
        locations: state.locations,
        approx_fees: state.school_fees,
        cp: 'search',
        page: 1,
        limit: 5
      }
      const response = await api.post('/institution', postSearch);
      if (response.statusText === "OK") {
        setData(response.data[0]);
        setBoards(response.data[1]);
        setMediums(response.data[2]);
        setBoardingTypes(response.data[3]);
        setSubTypes(response.data[4]);
      }
      setIsLoading(false);
    }
    fetchData(cityName);

  }, [cityName, state]);



  const DisplayData = (data.length !== 0 && data.map((info) => {
    return (
      <div className="my-5" key={info.id}>
        <div className="row border rounded">
          <div className="col-5 ps-0">
            <div className="d-flex position-relative src-img-div">
              <img className='schl-src-img' src={SrcSchlImg} alt="School Image" />
              <div className="bg-primary position-absolute rounded-1 text-white px-2 ms-3 mt-3"
                style={{ fontSize: '12px', width: '47px', height: 'fit-content' }}>4.2
                <i className="fa-solid fa-star position-absolute" style={{ fontSize: '10px' }}></i>
              </div>
              <span className="text-muted ps-6 mt-3 position-absolute" style={{ fontSize: '12px' }}>(50,000)</span>
            </div>
          </div>
          <div className="col-7">
            <div className="">
              <div className="mb-0 position-relative">
                <div className='position-absolute aprx-fee'>
                  Approx Fee: {info.approx_fees}
                </div>
              </div>
              <div>
              <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            {info.name}
          </Tooltip>
        )}
        placement="bottom"
      >
                <h4 className="fw-bold fs-1-2 text-truncate src-schl-hg mb-0">{info.name}</h4>
        </OverlayTrigger>
              </div>
              <div>
                <p className="fw-500 mb-3 src-pg-sb">{info.address3}, {info.city_name}</p>
                <div className=''>
                  <div className="d-flex w-100 pb-2">
                    <p className="fw-600 w-50 fs-small mb-0"> <Boards boards={info.inst_board} /></p>
                    <p className="fw-600 w-50 fs-small ps-1 mb-0">Co-ed School</p>
                  </div>
                  <div className="d-flex w-100 pb-4">
                    <p className="fw-600 w-50 fs-small mb-0">Nursery to class 10</p>
                    <p className="fw-600 w-50 fs-small ps-1 mb-0">Founder in {info.est_year}</p>
                  </div>
                </div>

                <p className="mb-0-7 fs-small text-truncate src-schl-desc lh-sm ">School Description: {info.desc}</p>

                <div className="d-flex justify-content-between pe-4 py-3">
                  <Link to={'/school/' + info.link}><button className="btn btn-green fw-500 rounded fs-10 text-white">
                    View School</button></Link>
                  <button className="btn btn-green fw-500 rounded fs-10 text-white">
                    Enquire Now</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );


  }));

  return (
    <div className="container-fluid" style={{ maxWidth: '1200px !important' }}>
      <div className="row d-flex justify-content-end">
        <div className="col-2 my-5 me-2-2">
          <h4 className="fw-bold p-0 m-0 fs-5">Search By</h4>
          <h5 className="py-4 fw-bold m-0 p-0 fs-0-7">Search Filter</h5>
          <TypeOfSchoolFilter boardingTypes={boardingTypes} />
          <SchoolLevelFilter subTypes={subTypes} />
          <SchoolBoardFilter boards={boards} />
          <LocationFilter />
          <FeeSlider />

          <p className="fs-xsmall fw-400 fc-xlight" onClick={ResetFilterHandler}>Reset Default</p>
        </div>
        <div className="col-6 me--0-7">

          {DisplayData}

        </div>
        <div className="col-3 mt-5 ps-4-15 me-2-71">
          <div className="fw-bold float-end px-2 ad-logo">AD</div>
          <div className='ad-dv'>
            <img className='ad-img' src={SrcAdImg} alt="advertisement" />
          </div>
          <div className='ad-dv-2'>
            <img className='ad-img' src={SrcAdImg2} alt="advertisement" />
          </div>
        </div>
      </div>
    </div>

  );

}

function TypeOfSchoolFilter(props) {

  const { state, filterDispatch } = useFilter();
  let counter = 0;
  const boardingTypeHandler = ((option) => {
    filterDispatch(option);
  });
  return (
    <>
      <p className='fs-xsmall fc-light mt-0 mb-0-7 fw-500'>Type of school</p>
      <div className="pb-4">
        {props.boardingTypes &&
          props.boardingTypes.length > 0 &&
          props.boardingTypes.map((bTypes) => {
            return (
              <div className="form-check mb--8px fs-sm-xm" key={bTypes.id}>
                <input className="form-check-input  " type="checkbox" id={'bTypes_' + bTypes.id} name={'bTypes_' + bTypes.id} value={bTypes.id} onChange={(e) => e.target.checked ? boardingTypeHandler({ type: 'BOARDING_ADD', payload: bTypes.id }) : boardingTypeHandler({ type: 'BOARDING_REMOVE', payload: bTypes.id })} />
                <label className="form-check-label fc-light fs10  fw-500">{bTypes.name}</label>
              </div>
            )

          })
        }
      </div>
    </>
  )
}


function SchoolLevelFilter(props) {

  const { state, filterDispatch } = useFilter();
  let counter = 0;
  const subTypesHandler = ((option) => {
    filterDispatch(option);
  });
  return (
    <>
      <p className='fs-xsmall fc-light fw-500 mb-0-4'>School Level</p>
      <div className="pb-4">
        {props.subTypes &&
          props.subTypes.length > 0 &&
          props.subTypes.map((sTypes) => {
            return (
              <div className="form-check fs-sm-xm mb--8px" key={sTypes.id}>
                <input className="form-check-input" type="checkbox" id={'sTypes_' + sTypes.id} name={'sTypes_' + sTypes.id} value={sTypes.id} onChange={(e) => e.target.checked ? subTypesHandler({ type: 'SCHOOLTYPES_ADD', payload: sTypes.id }) : subTypesHandler({ type: 'SCHOOLTYPES_REMOVE', payload: sTypes.id })} />
                <label className="form-check-label fc-light fs10  fw-500">{sTypes.name}</label>
              </div>
            )

          })
        }
      </div>
    </>
  )
}

function SchoolBoardFilter(props) {
  const { state, filterDispatch } = useFilter();
  let counter = 0;
  const BooardsHandler = ((option) => {
    filterDispatch(option);
  });
  return (
    <>
      <p className='fs-xsmall fc-light fw-500 mb-0-4'>School Board</p>
      <div className="pb-4">

        {props.boards &&
          props.boards.length > 0 &&
          props.boards.map((board) => {
            return (
              <div className="form-check fs-sm-xm mb--8px" key={board.id}>
                <input className="form-check-input" type="checkbox" id={'board_' + board.id} name={'board_' + board.id} value={board.id} onChange={(e) => e.target.checked ? BooardsHandler({ type: 'BOARD_ADD', payload: board.id }) : BooardsHandler({ type: 'BOARD_REMOVE', payload: board.id })} />
                <label className="form-check-label fc-light fs10  fw-500">{board.name}</label>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

function GradeFilter() {
  return (
    <>
      <p className='fs-xsmall fc-light fw-500 mb-0-4'>className/Grade</p>
      <div className="pb-4">
        <div className="form-check mb--8px fs-sm-xm">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
          <label className="form-check-label fc-light fs10  fw-500">Playschool</label>
        </div>
        <div className="form-check mb--8px fs-sm-xm">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
          <label className="form-check-label fc-light fs10  fw-500">Nursary</label>
        </div>
        <div className="form-check mb--8px fs-sm-xm">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
          <label className="form-check-label fc-light fs10  fw-500">Kindergarden</label>
        </div>
        <div className="form-check mb--8px fs-sm-xm">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
          <label className="form-check-label fc-light fs10  fw-500">LKG</label>
        </div>
        <div className="form-check mb--8px fs-sm-xm">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
          <label className="form-check-label fc-light fs10  fw-500">UKG</label>
        </div>
        <div className="form-check mb--8px fs-sm-xm">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
          <label className="form-check-label fc-light fs10  fw-500">className/Grade 1</label>
        </div>
        <div className="form-check mb--8px fs-sm-xm">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
          <label className="form-check-label fc-light fs10  fw-500">className/Grade 2</label>
        </div>
        <div className="form-check mb--8px fs-sm-xm">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
          <label className="form-check-label fc-light fs10 fw-500">className/Grade 2</label>
        </div>
      </div>
    </>
  )
}
function LocationFilter() {

  return (
    <>
      <p className='fs-xsmall fc-light mb-0-4 fw-500'>Location</p>
      <div className="pb-4">
        <div className="form-check fs-sm-xm mb--8px">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
          <label className="form-check-label fc-light fs10 fw-500">5 kms</label>
        </div>
        <div className="form-check mb--8px fs-sm-xm">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
          <label className="form-check-label fc-light fs10 fw-500">6 kms - 10 kms</label>
        </div>
        <div className="form-check mb--8px fs-sm-xm">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
          <label className="form-check-label fc-light fs10 fw-500">11 kms - 20 kms</label>
        </div>
        <div className="form-check mb--8px fs-sm-xm">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
          <label className="form-check-label fc-light fs10 fw-500">21 kms and above</label>
        </div>
      </div>
    </>
  )
}

function FeeSlider() {

  const [feeValue, setFeeValue] = useState([10000, 2000000]);
  const { state, filterDispatch } = useFilter();

  let counter = 0;
  const FeeHandler = ((option) => {
    setFeeValue(option.payload[0]);
    filterDispatch(option);

  });




  return (
    <div className="mb-0">
      <label htmlFor="customRange1" className="form-label fs-xsmall mb-0 fc-light fw-500">Annual Fee</label>
      <input type="range" className="form-range fee-range fc-light fs10 fw-500" id="customRange1"
        min={10000} max={2000000} step={10000} onChange={(e) => FeeHandler({ type: 'FEE_VALUE', payload: [e.target.value * 1, 2000000] })} />
      <div className="d-flex justify-content-between mt--16px fc-light fs10 fw-500">
        <p>{feeValue[0]}</p>
        <p>{feeValue[1]}</p>
      </div>
    </div>
  )
}
export default Search;  