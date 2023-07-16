import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import DocumentMainTable from "../../components/Tables/document-main.table";
import DealerFilters from "../../components/TableFilters/dealer.filter";
import DealerExtra from "../../components/ExtraInfos/dealer-extra";



const documentMainData = [
  {
    id: 1,
    code: "CL1008 ",
    dealer: "OOO “My Pharm” ",
    codeSp: "DL1008 ",
    contact: "Jamshid Vahobov ",
    date: "2023-05-22      -    В ожидании",
    statusRas: (
      <button className="table-button btn btn-warning px-1 pt-0 pb-1 text-center">
        Отдано
      </button>
    ),
    statusOpl: (
      <button className="table-button btn btn-success px-1 pt-0 pb-1 text-center">
        Отдано
      </button>
    ),
  },
  {
    id: 2,
    code: "CL2009 ",
    dealer: "OOO “My Pharm” ",
    codeSp: "DL1008 ",
    contact: "Jamshid Vahobov ",
    date: "2023-05-22      -    В ожидании",
    statusRas: (
      <button className="table-button btn btn-warning px-1 pt-0 pb-1 text-center">
        Отдано
      </button>
    ),
    statusOpl: (
      <button className="table-button btn btn-success px-1 pt-0 pb-1 text-center">
        Отдано
      </button>
    ),
  },
  {
    id: 3,
    code: "CL3308 ",
    dealer: "OOO “My Pharm” ",
    codeSp: "DL1008 ",
    contact: "Jamshid Vahobov ",
    date: "2023-05-22      -    В ожидании",
    statusRas: (
      <button className="table-button btn btn-warning px-1 pt-0 pb-1 text-center">
        Отдано
      </button>
    ),
    statusOpl: (
      <button className="table-button btn btn-success px-1 pt-0 pb-1 text-center">
        Отдано
      </button>
    ),
  },
  {
    id: 4,
    code: "CL4448 ",
    dealer: "OOO “My Pharm” ",
    codeSp: "DL1008 ",
    contact: "Jamshid Vahobov ",
    date: "2023-05-22      -    В ожидании",
    statusRas: (
      <button className="table-button btn btn-warning px-1 pt-0 pb-1 text-center">
        Отдано
      </button>
    ),
    statusOpl: (
      <button className="table-button btn btn-success px-1 pt-0 pb-1 text-center">
        Отдано
      </button>
    ),
  },
];

const dealersTableData = [
  {
    id: 1,
    name: "OOO “My Pharm” ",
    face: "Jamshid Vahobov ",
    tel: "+99899 999 99 99",
    contract: 12,
  },
  {
    id: 2,
    name: "OOO “My Pharm” ",
    face: "Jamshid Vahobov ",
    tel: "+99899 999 99 99",
    contract: 11,
  },
  {
    id: 3,
    name: "OOO “My Pharm” ",
    face: "Jamshid Vahobov ",
    tel: "+99811 111 11 11",
    contract: 10,
  },
];

const SingleDealer = () => {
  const { id } = useParams();
  const foundedDealer = dealersTableData.find((el) => el.id == id);
  return (
    <>
      <Header />
      <main className="main mb-5">
        <Hero />
        <Navbar />
        <div className="incomes px-2">
          <div className="container-fluid px-5 pt-3">
            <DealerExtra extraData={foundedDealer} />
            <div className="income__inner shadow-lg py-3 px-4 rounded-3 bg-white">
              <div className="income-body shadow-lg py-3 rounded-2">
                <h3 className="income-body__title text-center text-dark-emphasis mb-5">
                  Список медикаментов :
                </h3>
                <hr />
                <DealerFilters/>
                <hr />
                <DocumentMainTable tableData={documentMainData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleDealer;
