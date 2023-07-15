import EditIcon from "../../assets/icons/edit-icon.svg";
import ExitModal from "../../assets//icons/exit-modal.svg";
const HomeEditExpenseModal = ({ data }) => {
  return (
    <>
      <img
        src={EditIcon}
        role="button"
        className="me-2"
        data-bs-toggle="modal"
        data-bs-target={`#editHomeIncomeModal${data.id}`}
        alt="Edit modal icon"
      ></img>

      <div
        className="modal fade"
        id={`editHomeIncomeModal${data.id}`}
        tabIndex="-1"
        aria-labelledby="editHomeIncome"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content shadow-lg p-3">
            <div className="modal-header text-center">
              <h2 className="modal-title fs-4 text-center  w-100 text-body-secondary">
                Выписка медикамента : {data.name}
              </h2>
              <img
                src={ExitModal}
                alt="exit modal"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body ">
              <form>
                <div className="form-body row row-cols-2 shadow-lg px-4 py-3  justify-content-between rounded-3 mb-3">
                  <label htmlFor="medicine" className="col-12 mb-3">
                    <p className="text-body-secondary mb-1 fs-custom">
                      МЕДИКАМЕНТ
                    </p>
                    <select
                      disabled
                      name="medicine"
                      id="medicine"
                      className="form-select form-select-sm text-secondary-emphasis w-100"
                    >
                      <option value="1">Парацетамол</option>
                      <option value="2">Парацетамол</option>
                    </select>
                  </label>
                  <div className="form-body__left d-grid gap-3">
                    <label htmlFor="store">
                      <p className="text-body-secondary mb-1 fs-custom">
                        СКЛАД
                      </p>
                      <select
                        disabled
                        name="store"
                        id="store"
                        className="form-select form-select-sm text-secondary-emphasis w-100"
                      >
                        <option value="0">Главный</option>
                        <option value="1">Главный</option>
                      </select>
                    </label>
                    <label htmlFor="quantity">
                      <p className="text-body-secondary mb-1 fs-custom">
                        КОЛИЧЕСТВО
                      </p>
                      <select
                        disabled
                        name="quantity"
                        id="quantity"
                        className="form-select form-select-sm text-secondary-emphasis w-100"
                      >
                        <option value="0">100</option>
                        <option value="2">101</option>
                      </select>
                    </label>
                    <label htmlFor="unit">
                      <p className="text-body-secondary mb-1 fs-custom">
                        ЕДИНИЦА ИЗМЕРЕНИЯ
                      </p>
                      <select
                        disabled
                        name="unit"
                        id="unit"
                        className="form-select form-select-sm text-secondary-emphasis w-100"
                      >
                        <option value="0">Капсула</option>
                        <option value="2">Капсула</option>
                      </select>
                    </label>
                    <label htmlFor="registration">
                      <p className="text-body-secondary mb-1 fs-custom">
                        ДАТА РЕГИСТРАЦИИ
                      </p>
                      <input
                        disabled
                        type="date"
                        name="registration"
                        id="registration"
                        className="form-control"
                      />
                    </label>
                  </div>
                  <div className="form-body__right d-grid gap-3">
                  <label htmlFor="pharmacy">
                      <p className="text-body-secondary mb-1 fs-custom">
                      АПТЕКА
                      </p>
                      <select
                        name="pharmacy"
                        id="pharmacy"
                        className="form-select form-select-sm text-secondary-emphasis w-100"
                      >
                        <option value="0" disabled>
                        Выберите аптеку
                        </option>
                        <option value="1" selected>{data.chemist}</option>
                        <option value="2">100</option>
                      </select>
                    </label>
                    <label htmlFor="quantity-taken">
                      <p className="text-body-secondary mb-1 fs-custom">
                        КОЛИЧЕСТВО ОТДАННОГО
                      </p>
                      <select
                        name="quantity-taken"
                        id="quantity-taken"
                        className="form-select form-select-sm text-secondary-emphasis w-100"
                      >
                        <option value="0" selected disabled>
                          Введите количество
                        </option>
                        <option value="1">100</option>
                        <option value="2">100</option>
                      </select>
                    </label>
                    <label htmlFor="unit-of-measurament">
                      <p className="text-body-secondary mb-1 fs-custom">
                        ЕДИНИЦА ИЗМЕРЕНИЯ ВЗЯТОГО
                      </p>
                      <select
                        name="unit-of-measurament"
                        id="unit-of-measurament"
                        className="form-select form-select-sm text-secondary-emphasis w-100"
                      >
                        <option value="0" selected disabled>
                          Выберите единицу измерения
                        </option>
                        <option value="1">Капсула</option>
                        <option value="2">Капсула</option>
                      </select>
                    </label>
                    <label htmlFor="date-of-collect">
                      <p className="text-body-secondary mb-1 fs-custom">
                        ДАТА ВЗЯТИЯ
                      </p>
                      <input
                        disabled
                        type="date"
                        name="date-of-collect"
                        id="date-of-collect"
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>

                <div className="form-footer row row-cols-2 mt-4 shadow-lg px-4 py-3  justify-content-between rounded-3 mb-3">
                  <label htmlFor="gave">
                    <p className="text-body-secondary mb-1 fs-custom">ОТДАЛ</p>
                    <select
                      name="gave"
                      id="gave"
                      className="form-select"
                      disabled
                    >
                      <option value="0" selected>
                        Камрон Хамроевич Олимов
                      </option>
                    </select>
                  </label>
                  <label htmlFor="get">
                    <p className="text-body-secondary mb-1  fs-custom">
                      ПРИНЯЛ
                    </p>
                    <select name="get" id="get" className="form-select">
                      <option value="0" selected disabled>
                        Выберите принимающего
                      </option>
                      <option value="1">Азиза Ахматовна Азизова</option>
                    </select>
                  </label>
                </div>

                <div className="cancel d-flex justify-content-end gap-4">
                  <button type="submit" className="btn btn-success btn-sm px-4">
                    Сохранить
                  </button>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-secondary btn-sm px-4"
                  >
                    Отмена
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeEditExpenseModal;
