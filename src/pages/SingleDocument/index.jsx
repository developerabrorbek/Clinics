import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import HomeIncomeFilters from "../../components/TableFilters/home-income.filters";
import HomeIncomeTable from "../../components/Tables/home-income.table";
import DocumentExtra from "../../components/ExtraInfos/document-extra";
import { useParams } from "react-router-dom";
import HomeExpenseTable from "../../components/Tables/home-expense.table";

const incomeTableData = [
  {
    id: 1,
    number: 1,
    name: "Лориста 50мг",
    dealer: "ООО “My Pharm”",
    contract: "C10001",
    change: "5 лист / Коробка",
    kolich: "100",
    kolvz: "100",
    left: 0,
    vozv: 0,
    data: "2023-05-22",
  },
  {
    id: 2,
    number: 2,
    name: "Парецатамол",
    dealer: "ООО “My Pharm”",
    contract: "C10001",
    change: "5 лист / Коробка",
    kolich: "100",
    kolvz: "100",
    left: 0,
    vozv: 0,
    data: "2023-05-22",
  },
  {
    id: 3,
    number: 3,
    name: "Парецатамол",
    dealer: "ООО “My Pharm”",
    contract: "C10001",
    change: "5 лист / Коробка",
    kolich: "100",
    kolvz: "100",
    left: 0,
    vozv: 0,
    data: "2023-05-22",
  },
  {
    id: 4,
    number: 4,
    name: "Парецатамол",
    dealer: "ООО “My Pharm”",
    contract: "C10001",
    change: "5 лист / Коробка",
    kolich: 100,
    kolvz: 100,
    left: 0,
    vozv: 0,
    data: "2023-05-22",
  },
];

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

const expenseTableData = [
  {
    id: 1,
    number: 1,
    name: "Парецатамол ",
    store: "Главный",
    chemist: "Неврология ",
    change: "5 лист / Коробка",
    kolich: 20,
    kolvz: 0,
    left: 520,
    status: (
      <button className="table-button btn btn-success px-1 pt-0 pb-1 text-center">
        Отдано
      </button>
    ),
    data: "2023-05-22",
  },
  {
    id: 2,
    number: 2,
    name: "Кетонал  ДУО ",
    store: "Главный",
    chemist: "Стационар  ",
    change: "Капслуа",
    kolich: 25,
    kolvz: 10,
    left: 350,
    status: (
      <button className="table-button btn btn-warning px-1 pt-0 pb-1 text-center">
        В ожидании
      </button>
    ),
    data: "2023-05-22",
  },
  {
    id: 3,
    number: 3,
    name: "Лориста 50мг ",
    store: "Главный",
    chemist: "Кордиология  ",
    change: "5 лист / Коробка",
    kolich: 15,
    kolvz: 0,
    left: 319,
    status: (
      <button className="table-button btn btn-danger px-1 pt-0 pb-1 text-center">
        Отказано
      </button>
    ),
    data: "2023-05-22",
  },
  {
    id: 4,
    number: 4,
    name: "Парецатамол ",
    store: "Главный",
    chemist: "Неврология ",
    change: "5 лист / Коробка",
    kolich: 50,
    kolvz: 12,
    left: 400,
    status: (
      <button className="table-button btn btn-success px-1 pt-0 pb-1 text-center">
        Отдано
      </button>
    ),
    data: "2023-05-22",
  },
];

const SingleDocument = () => {
  const { id } = useParams();
  const foundedDocument = documentMainData.find((el) => el.id == id);
  return (
    <>
      <Header />
      <main className="main mb-5">
        <Hero />
        <Navbar />
        <div className="incomes px-2">
          <div className="container-fluid px-5 pt-3">
            <DocumentExtra extraData={foundedDocument} />
            <div className="income__inner shadow-lg py-3 px-4 rounded-3 bg-white">
              <div className="income-body shadow-lg py-3 rounded-2">
                <h3 className="income-body__title text-center text-dark-emphasis mb-5">
                  Список медикаментов :
                </h3>
                <hr />
                <HomeIncomeFilters />
                <hr />
                <HomeExpenseTable tableData={expenseTableData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleDocument;
