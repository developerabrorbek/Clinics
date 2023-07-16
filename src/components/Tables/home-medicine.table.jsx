import EditIcon from "../../assets/icons/edit-icon.svg";
import WatchIcon from "../../assets/icons/eye-icon.svg";
import ExportIcon from "../../assets/icons/download-icon.svg";
import SortIcon from "../../assets/icons/sort-icon.svg"

const tableData = [
  {
    id: 1,
    name: "Лориста 50мг",
    document: "C10001",
    kolich: 100,
    change: "5 лист / Коробка ",
    store: "Главный",
    kol: 70,
    izm: "5 лист / Коробка ",
    kodRas: "UI10020",
    status: (
      <button className="table-button btn btn-success px-1 pt-0 pb-1 text-center">
        Отдано
      </button>
    ),
    kodSp: "DL1009 ",
    data: "2023-05-22",
  },
  {
    id: 2,
    name: "Парецатамол ",
    document: "C10001",
    kolich: 100,
    change: "5 лист / Коробка ",
    store: "Главный",
    kol: 70,
    izm: "5 лист / Коробка ",
    kodRas: "UI10020",
    status: (
      <button className="table-button btn btn-success px-1 pt-0 pb-1 text-center">
        Отдано
      </button>
    ),
    kodSp: "DL1009 ",
    data: "2023-05-22",
  },
  {
    id: 3,
    name: "Парецатамол ",
    document: "C100012",
    kolich: 100,
    change: "5 лист / Коробка ",
    store: "Главный",
    kol: 70,
    izm: "5 лист / Коробка ",
    kodRas: "UI10020",
    status: (
      <button className="table-button btn btn-danger px-1 pt-0 pb-1 text-center">
        Отказано
      </button>
    ),
    kodSp: "DL1009 ",
    data: "2023-05-22",
  },
];

const HomeMedicineTable = () => {
  return (
    <>
      <div className="income-body__table p-3 d-flex justify-content-center flex-column gap-3">
        <div className="income-body__table--actions d-flex justify-content-between">
          <form className="income-body__left-form d-flex align-items-center gap-3">
            <label
              htmlFor="count"
              className="d-flex align-align-items-end gap-3 text-body-secondary"
            >
              Показать записи
            </label>
            <select name="count" id="count" className="form-select w-auto">
              <option value="10">10</option>
              <option value="5">5</option>
              <option value="15">15</option>
            </select>
          </form>

          <div className="income-body__right-actions d-flex gap-3 align-items-center">
            <form className="d-flex gap-3 align-items-center">
              <label htmlFor="search" className="text-body-secondary">
                Поиск:
              </label>
              <input
                type="text"
                name="search"
                id="search"
                className="form-control"
              />
            </form>
            <button className="export-button btn btn-custom-export text-primary border-0 d-flex gap-2 align-items-center">
              <img src={ExportIcon} alt="export icon" />
              Экспорт
            </button>
          </div>
        </div>
        <table className="table table-responsive table-bordered">
          <thead>
            <tr>
              <th>№ <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>ДОКУМЕНТ <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>КОЛИЧ. <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>ЕД. ИЗМЕРЕНИЯ <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>СКЛАД <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>КОЛ. ВЗЯТ. <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>ЕД. ИЗМ. ВЗЯТ. <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>КОД РАСП. <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>СТАТУС РАСП. <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>КОД СП. М. <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>ДАТА <img src={SortIcon} alt="sort icon" className="float-end" /></th>
              <th>ДЕЙСТВИЕ <img src={SortIcon} alt="sort icon" className="float-end" /></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, i) => {
              return (
                <>
                  <tr>
                    <td className="text-body-secondary">{i + 1}</td>
                    <td className="text-primary">{data.document}</td>
                    <td className="text-primary">{data.kolich}</td>
                    <td className="text-primary">{data.change} </td>
                    <td className="text-body-secondary">{data.store} </td>
                    <td className="text-body-secondary">{data.kol}</td>
                    <td className="text-body-secondary">{data.izm}</td>
                    <td className="text-body-secondary">{data.kodRas}</td>
                    <td className="text-body-secondary">{data.status}</td>
                    <td className="text-body-secondary">{data.kodSp}</td>
                    <td className="text-body-secondary">{data.data}</td>
                    <td>
                      <img
                        src={WatchIcon}
                        alt="watch icon"
                        className="me-2"
                        role="button"
                      />
                      <img src={EditIcon} alt="edit icon" role="button" />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>

        <div className="table-pagination d-flex align-items-center justify-content-between">
          <p className="table-pagination__text text-body-secondary">
            Показано от 1 до {tableData.length} из {tableData.length} записей
          </p>
          <ul className="table-pagination__body pagination d-flex gap-2">
            <li className="page-item disabled rounded-2 overflow-hidden">
              <span className="page-link">Предыдущий</span>
            </li>
            {[1].map((_, i) => {
              return (
                <>
                  <li className="page-item rounded-2 overflow-hidden">
                    <a className="page-link" href="#">
                      {i + 1}
                    </a>
                  </li>
                </>
              );
            })}
            <li className="page-item rounded-2 overflow-hidden">
              <a className="page-link" href="#">
                Следующий
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeMedicineTable;
