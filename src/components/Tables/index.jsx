import { HomeBtnOutlined, HomeBtnPrimary } from "../Buttons";

const AssetsTable = () => {
  return (
    <>
      <div className="incomes px-2">
        <div className="container-fluid px-5 pt-3">
          <div className="income__inner shadow-lg py-3 px-4 rounded-3 bg-white">
            <div className="income-links d-flex gap-5 mb-5">
              <HomeBtnPrimary />
              <HomeBtnOutlined />
            </div>
            <div className="income-body shadow-lg py-3 rounded-2">
              <h3 className="income-body__title text-center text-dark-emphasis mb-5">
                Список оприходованных медикаментов
              </h3>
              <hr />
              <div className="income-body__filters p-3 pb-4">
                <h4 className="income-body__filters-title text-dark-emphasis mb-4">
                  Фильтер
                </h4>
                <form className="income-body__filters-form d-flex gap-3 align-items-center">
                  <select
                    name="drug"
                    id="drug"
                    className="form-select w-auto text-body-secondary"
                  >
                    <option selected disabled>
                      Все препараты
                    </option>
                  </select>
                  <select
                    name="store"
                    id="store"
                    className="form-select w-auto text-body-secondary"
                  >
                    <option selected disabled>
                      Все склады
                    </option>
                  </select>
                  <select
                    name="dealer"
                    id="dealer"
                    className="form-select w-auto text-body-secondary"
                  >
                    <option selected disabled>
                      Все дилеры
                    </option>
                  </select>
                  <select
                    name="unit"
                    id="unit"
                    className="form-select w-auto text-body-secondary"
                  >
                    <option selected disabled>
                      Все единицы измерения
                    </option>
                  </select>
                  <select
                    name="status"
                    id="status"
                    className="form-select w-auto text-body-secondary"
                  >
                    <option selected disabled>
                      Все статусы
                    </option>
                  </select>
                  <select
                    name="contract"
                    id="contract"
                    className="form-select w-auto text-body-secondary"
                  >
                    <option selected disabled>
                      Все контракты
                    </option>
                  </select>
                </form>
              </div>
              <hr />
              <div className="income-body__table p-3">
                <div className="income-body__table--actoins">
                  <form className="income-body__left-form d-flex align-items-center gap-3">
                    <label
                      htmlFor="count"
                      className="d-flex align-align-items-end gap-3 text-body-secondary"
                    >
                      Показать записи
                    </label>
                    <select
                      name="count"
                      id="count"
                      className="form-select w-auto"
                    >
                      <option value="10">10</option>
                    </select>
                  </form>


                </div>
                {/* <table className="table table-responsive">
                  <thead>
                    <th>1</th>
                  </thead>
                  <tbody>
                    <td>1</td>
                  </tbody>
                </table> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetsTable;
