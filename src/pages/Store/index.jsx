import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import StoreMainTable from "../../components/Tables/store-main.table";

const storeMainTableData = [
  {
    id: 1,
    name: "Главный",
    employee: "Камрон Хамроевич Олимов",
    floor: "0 Этаж     1 Комната ",
  },
  {
    id: 2,
    name: "Зав отделение ",
    employee: "Отахон Сирожиддинович Окилов",
    floor: "0 Этаж     3 Комната   ",
  },
  {
    id: 3,
    name: "Главный",
    employee: "Камрон Хамроевич Олимов",
    floor: "0 Этаж     3 Комната   ",
  },
];

const Store = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Navbar />
        <div className="stores px-2 py-4">
          <div className="container-fluid px-5 pt-3">
            <div className="store__inner shadow-lg py-3 px-4 rounded-3 bg-white">
              <div className="store-body shadow-lg py-3 rounded-2">
                <h3 className="store-body__title text-center text-dark-emphasis mb-5">
                  Список складов
                </h3>
                <hr />
                <StoreMainTable tableData={storeMainTableData}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Store;
