import EditIcon from "../../assets/icons/edit-icon.svg";
import EyeIcon from "../../assets/icons/eye-icon.svg";
import DownloadIcon from "../../assets/icons/download-icon.svg"
import HomeCreateExpenseModal from "../Modals/home-create-expense.modal";
import HomeEditExpenseModal from "../Modals/home-edit-expense.modal";
import HomeReadExpenseModal from "../Modals/home-read-expense.modal";

const HomeExpenseTable = ({ tableData }) => {
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
              <img src={DownloadIcon} alt="download icon" />
              Экспорт
            </button>

            <HomeCreateExpenseModal data={tableData}/>
          </div>
        </div>
        <table className="table table-responsive table-bordered">
          <thead>
            <tr>
              <th>№</th>
              <th>НАИМЕНОВАНИЕ</th>
              <th>Склад</th>
              <th>Аптека</th>
              <th>ЕД. ИЗМЕРЕНИЯ</th>
              <th>КОЛИЧ.</th>
              <th>КОЛ. ВЗЯТОГО</th>
              <th>ОБ ОСТАТОК</th>
              <th>СТАТУС</th>
              <th>ДАТА</th>
              <th>ДЕЙСТВИЕ</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => {
              return (
                <>
                  <tr>
                    <td className="text-body-secondary">{data.number}</td>
                    <td className="text-primary">{data.name}</td>
                    <td className="text-primary">{data.store}</td>
                    <td className="text-primary">{data.chemist} </td>
                    <td className="text-body-secondary">{data.change} </td>
                    <td className="text-body-secondary">{data.kolich}</td>
                    <td className="text-body-secondary">{data.kolvz}</td>
                    <td className="text-body-secondary">{data.left}</td>
                    <td className="text-body-secondary text-center">
                      {data.status}
                    </td>
                    <td className="text-body-secondary">{data.data}</td>
                    <td>
                      {/* <img
                        role="button"
                        src={EyeIcon}
                        alt="watch icon"
                        id={data.id}
                        title="show"
                        className="me-1"
                      />{" "} */}
                      <HomeReadExpenseModal data={data}/>
                      {/* <img
                        role="button"
                        src={EditIcon}
                        alt="edit icon"
                        title="edit"
                        id={data.id}
                      /> */}
                      <HomeEditExpenseModal data={data}/>
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

export default HomeExpenseTable;
