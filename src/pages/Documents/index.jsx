import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import HomeExpenseFilters from "../../components/TableFilters/home-expense.filter";
import DocumentMainTable from "../../components/Tables/document-main.table";

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

const Documents = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Navbar />
        <div className="document px-2">
          <div className="container-fluid px-5 pt-3">
            <div className="document__inner shadow-lg py-3 px-4 rounded-3 bg-white">
              <div className="document-body shadow-lg py-3 rounded-2">
                <h3 className="document-body__title text-center text-dark-emphasis mb-5">
                  Список документов
                </h3>
                <hr />
                <HomeExpenseFilters />
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

export default Documents;
