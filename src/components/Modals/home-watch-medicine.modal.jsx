import ExitModal from "../../assets//icons/exit-modal.svg";
import HomeMedicineFilters from "../TableFilters/home-medicine.filter";
import HomeMedicineTable from "../Tables/home-medicine.table";

const HomeWatchMedicineModal = ({ data }) => {
  return (
    <>
      <a
        href="#"
        className="text-primary text-decoration-none"
        data-bs-toggle="modal"
        data-bs-target={`#watchHomeMedicineModal${data.id}`}
        role="button"
      >
        {data.name}
      </a>

      <div
        className="modal fade"
        id={`watchHomeMedicineModal${data.id}`}
        tabIndex="-1"
        aria-labelledby="watchHomeMedicine"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-xl modal-dialog-centered"
          style={{ maxWidth: "94%" }}
        >
          <div className="modal-content shadow-lg p-3">
            <div className="modal-header text-center">
              <h2 className="modal-title fs-4 text-center  w-100 text-body-secondary">
                Медикамент : {data.name}
              </h2>
              <img
                src={ExitModal}
                alt="exit modal"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="income-body py-3 rounded-2">
                <HomeMedicineFilters data={data} />
                <hr />
                <HomeMedicineTable data={data} />
              </div>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-secondary btn-sm px-4 float-end"
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWatchMedicineModal;
