import React from "react";
import "../styles/About.css";
function Cart() {
    return(
        <div>
    <main role="main">
        <div className="container mt-4">
            <div id="thongbao" className="alert alert-danger d-none face" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>

            <h1 className="text-center">Giỏ hàng</h1>
            <div className="row">
                <div className="col col-md-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                    </table>
                    <a href="http://localhost:3000/" className="btn btn-warning btn-md"  to="/"  ><i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;Quay về trang chủ</a>
                    <a href="checkout.html" className="btn btn-primary btn-md"><i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Thanh toán</a>
                </div>
            </div>
        </div>
            </main>
    </div>
    );
}

export default Cart;
