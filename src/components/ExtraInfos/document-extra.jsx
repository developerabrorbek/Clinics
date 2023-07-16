const DocumentExtra = ({ extraData }) => {
  const data = { ...extraData };
  return (
    <>
      <div className="pharmacy__inner-extra shadow-lg py-3 px-4 rounded-3 bg-white mb-5">
        <h3 className="text-body-secondary text-center mb-4">
          Документ : {data.code}
        </h3>
        <div className="info d-flex gap-4">
          <div className="info-first">
            <p> Код документа : {data.code}</p>
            <p> Дилеры : {data.dealer}</p>
            <p> Контакт : {data.contact} </p>
            <div className="status d-flex gap-3 align-items-center">
              <p>Статус оплаты : </p> {data.statusOpl}
            </div>
          </div>
          <div className="info-second">
            <p> Код список медикаментов : {data.codeSp}</p>
            <p> Дата регистрации :{data.date} </p>
            <p> Дополнительная информация : {data.extra}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentExtra;
