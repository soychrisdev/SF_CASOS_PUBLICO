
export default function Modal() {
    return (
        <>
            <div className="modal-backdrop fade show"></div>
            <div className="modal fade show" id="modalExample-small" tabIndex={-1} role="dialog" aria-labelledby="ModalExample" aria-hidden="true" style={{ display: "block", paddingRight: 17 }}>
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="heading lead">Modal Pequeño</p>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body px-0">
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officiis, facere est repellendus quaerat animi. Ab asperiores iste, dolor distinctio, natus doloremque, dicta labore culpa quod est expedita eaque minus. </p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button className="btn btn-secondary waves-effect waves-light" data-dismiss="modal">Cerrar</button>
                            <button className="btn btn-default waves-effect waves-light" data-dismiss="modal">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
