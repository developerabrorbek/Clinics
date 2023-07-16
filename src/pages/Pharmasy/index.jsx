import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import StoreMainTable from "../../components/Tables/store-main.table";

const pharmacyMainTableData = [
  {
    id: 1,
    name: "Стационар ",
    employee: "Камрон Хамроевич Олимов",
    floor: 0,
    room: 1,
  },
  {
    id: 2,
    name: "Поликлиника ",
    employee: "Отахон Сирожиддинович Окилов",
    floor: 3,
    room: 1,
  },
  {
    id: 3,
    name: "Функционал диагностика ",
    employee: "Камрон Хамроевич Олимов",
    floor: 2,
    room: 3,
  },
  {
    id: 4,
    name: "Клиническая лаборатория ",
    employee: "Отахон Сирожиддинович Окилов",
    floor: 1,
    room: 4,
  },
];

const Pharmacy = () => {
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
                  Список аптек
                </h3>
                <hr />
                <StoreMainTable tableData={pharmacyMainTableData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Pharmacy;
