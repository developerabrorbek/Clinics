import { useState } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import HomeIncomeFilters from "../../components/TableFilters/home-income.filters";
import HomeIncomeTable from "../../components/Tables/home-income.table";
import { useParams } from "react-router-dom";
import StoreExtra from "../../components/ExtraInfos/store-extra";
import StoreIncomeTable from "../../components/Tables/store-income.table";
import StoreExpenseTable from "../../components/Tables/store-expense.table";
import HomeExpenseFilters from "../../components/TableFilters/home-expense.filter";

const storeMainTableData = [
  {
    id: 1,
    name: "Главный",
    employee: "Камрон Хамроевич Олимов",
    floor: 0,
    room: 1,
  },
  {
    id: 2,
    name: "Зав отделение ",
    employee: "Отахон Сирожиддинович Окилов",
    floor: 0,
    room: 3,
  },
  {
    id: 3,
    name: "Главный",
    employee: "Камрон Хамроевич Олимов",
    floor: 0,
    room: 3,
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
const SingleStore = () => {
  const [table, setTable] = useState("income");

  const { id } = useParams();

  const foundedStore = storeMainTableData.find((e) => e.id == id);


  const activeButtonClass = "btn btn-primary px-4 py-2";
  const inActiveButtonClass = "btn btn-outline-primary px-4 py-2";

  let pageTable, pageFilter, title;

  switch (table) {
    case "income":
      title= "Список оприходованных медикаментов";
      pageTable = <StoreIncomeTable tableData={incomeTableData} />;
      pageFilter = <HomeIncomeFilters />;
      break;
    case "expense":
      title= "Список выданных медикаментов",
        (pageTable = <StoreExpenseTable tableData={expenseTableData} />);
      pageFilter = <HomeExpenseFilters />;
      break;
    case "medicine":
      title= "Список  медикаментов";
      pageTable = <StoreIncomeTable tableData={incomeTableData} />;
      pageFilter = <HomeIncomeFilters />;
      break;
  }

  return (
    <>
      <Header />
      <main className="main mb-4">
        <Hero />
        <Navbar />
        <div className="incomes px-2">
          <div className="container-fluid px-5 pt-3">
            <StoreExtra extraData={foundedStore} />
            <div className="income__inner-body shadow-lg py-3 px-4 rounded-3 bg-white">
              <div className="income-links d-flex gap-5 mb-5">
                <button
                  onClick={() => setTable("income")}
                  className={
                    table == "income" ? activeButtonClass : inActiveButtonClass
                  }
                >
                  Приход
                </button>
                <button
                  onClick={() => setTable("expense")}
                  className={
                    table == "expense" ? activeButtonClass : inActiveButtonClass
                  }
                >
                  Расход
                </button>
                <button
                  onClick={() => setTable("medicine")}
                  className={
                    table == "medicine"
                      ? activeButtonClass
                      : inActiveButtonClass
                  }
                >
                  Медикаменты
                </button>
              </div>
              <div className="income-body shadow-lg py-3 rounded-2">
                <h3 className="income-body__title text-center text-dark-emphasis mb-5">
                  {title}
                </h3>
                <hr />
                {pageFilter}
                <hr />
                {pageTable}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleStore;
