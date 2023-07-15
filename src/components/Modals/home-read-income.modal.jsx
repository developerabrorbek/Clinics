import EyeIcon from "../../assets/icons/eye-icon.svg";
import ExitModal from "../../assets//icons/exit-modal.svg";
const HomeReadIncomeModal = ({ data }) => {
  return (
    <>
      <img
        src={EyeIcon}
        role="button"
        className="me-2"
        data-bs-toggle="modal"
        data-bs-target={`#readHomeIncomeModal${data.id}`}
        alt="Read modal icon"
      ></img>

      <div
        className="modal fade"
        id={`readHomeIncomeModal${data.id}`}
        tabIndex="-1"
        aria-labelledby="readHomeIncome"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content shadow-lg p-3">
            <div className="modal-header text-center">
              <h2 className="modal-title fs-4 text-center  w-100 text-body-secondary">
                Оприходование медикамента : Парацетамол
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
                <div className="form-head row row-cols-3 shadow-lg px-4 py-3 justify-content-between rounded-3 mb-3">
                  <label htmlFor="document">
                    <p className="text-body-secondary mb-1 fs-custom">
                      КОД ДОКУМЕНТА
                    </p>
                    <select
                      disabled
                      name="document"
                      id="document"
                      className="form-select form-select-sm text-secondary-emphasis"
                    >
                      <option value="0">CL1001</option>
                      <option value="2">CL1002</option>
                    </select>
                  </label>
                  <label htmlFor="code-of-medicine">
                    <p className="text-body-secondary mb-1 fs-custom">
                      КОД СПИСОК МЕДИКАМЕНТОВ
                    </p>
                    <select
                      disabled
                      name="medicine-code"
                      id="medicine-code"
                      className="form-select form-select-sm text-secondary-emphasis w-100"
                    >
                      <option value="0">DL1001</option>
                      <option value="2">DL1001</option>
                    </select>
                  </label>
                  <label htmlFor="dealer">
                    <p className="text-body-secondary mb-1 fs-custom">ДИЛЕР</p>
                    <select
                      disabled
                      name="dealer"
                      id="dealer"
                      className="form-select form-select-sm  text-secondary-emphasis w-100"
                    >
                      <option value="0">ООО “My Pharm”</option>
                      <option value="2">ООО “My Pharm”</option>
                    </select>
                  </label>
                </div>

                <div className="form-body row row-cols-2 shadow-lg px-4 py-3  justify-content-between rounded-3 mb-3">
                  <div className="form-body__left d-grid gap-3">
                    <label htmlFor="medicine">
                      <p className="text-body-secondary mb-1 fs-custom">
                        МЕДИКАМЕНТ
                      </p>
                      <select
                        disabled
                        name="medicine"
                        id="medicine"
                        className="form-select form-select-sm text-secondary-emphasis w-100"
                      >
                        <option value="0">Парацетамол</option>
                        <option value="2">Парацетамол</option>
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
                    <label
                      htmlFor="status-of-payment"
                      className="d-flex align-items-center gap-3"
                    >
                      <p className="text-body-secondary mb-0 fs-custom">
                        СТАТУС ОПЛАТЫ :
                      </p>
                      <button
                        type="button"
                        id="status"
                        className="btn btn-success btn-sm"
                      >
                        Оплачено
                      </button>
                    </label>
                  </div>
                  <div className="form-body__right d-grid gap-3">
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
                    <label htmlFor="quantity-taken">
                      <p className="text-body-secondary mb-1 fs-custom">
                        КОЛИЧЕСТВО ВЗЯТОГО
                      </p>
                      <select
                        disabled
                        name="quantity-taken"
                        id="quantity-taken"
                        className="form-select form-select-sm text-secondary-emphasis w-100"
                      >
                        <option value="0">100</option>
                        <option value="2">100</option>
                      </select>
                    </label>
                    <label htmlFor="unit-of-measurament">
                      <p className="text-body-secondary mb-1 fs-custom">
                        ЕДИНИЦА ИЗМЕРЕНИЯ ВЗЯТОГО
                      </p>
                      <select
                        disabled
                        name="unit-of-measurament"
                        id="unit-of-measurament"
                        className="form-select form-select-sm text-secondary-emphasis w-100"
                      >
                        <option value="0">Капсула</option>
                        <option value="2">Капсула</option>
                      </select>
                    </label>
                    <label htmlFor="date-of-cost">
                      <p className="text-body-secondary mb-1 fs-custom">
                        ДАТА ОПРИХОДОВАНИЕ
                      </p>
                      <input
                        disabled
                        type="date"
                        name="date-of-cost"
                        id="date-of-cost"
                        className="form-control"
                      />
                    </label>
                    <label
                      htmlFor="status-of-posting"
                      className="d-flex align-items-center gap-3"
                    >
                      <p className="text-body-secondary mb-0 fs-custom">
                        СТАТУС ОПРИХОДОВАНИЕ :
                      </p>
                      <button type="button" className="btn btn-success btn-sm">
                        Распаковано
                      </button>
                    </label>
                  </div>
                  <div className="done mt-4 col-12">
                    <label
                      htmlFor="record-made"
                      className="d-flex align-items-center gap-3"
                    >
                      <p className="text-body-secondary mb-0  fs-custom">
                        ЗАПИСЬ СДЕЛАЛ :
                      </p>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                        disabled
                      >
                        Камрон Хамроевич Олимов
                      </button>
                    </label>
                  </div>
                </div>

                <div className="cancel d-flex justify-content-end">
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

export default HomeReadIncomeModal;
