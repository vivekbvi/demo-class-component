import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainContent.css";
import axios from "axios";
import Card from "../UI/Card";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      booklist: false,
      isLoading: true,
    };
  }

  //   LifeCycle method for Api call
  async componentDidMount() {
    const url = "https://bookclubapi.ndtrain.brainvire.net/book/getbooks";
    await axios.post(url).then((res) => {
      this.setState({
        list: res.data,
        isLoading: false,
      });
      console.log("res", res.data);
    });
  }
  render() {
    const data = this.props.data;
    console.log(data);
    console.log("list", this.state.list);
    return (
      <Fragment>
        {this.state.isLoading ? (
          <Spinner animation="border" role="status" className="mt-5 mb-5">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <div className="container w-100 pb-2">
            <div className="row w-100 listing">
              <h3 className="">
                Welcome{" "}
                <span style={{ color: "darkblue", fontWeight: "700" }}>
                  {data}
                </span>
              </h3>
              {this.state.list &&
                this.state.list.data.books.map((book) => (
                  <div className={`col-md-4 p-2 h-100`}>
                    <Card className="h-100 p-3 w-100">
                      <div className="row text-left">
                        <div className="col-6 col-md-6 col-sm-12">
                          <Link to={`/bookdetails/${book.book_id}`}>
                            <img
                              src={book.book_img}
                              alt="api images"
                              className="mt-2 mb-2 img-fluid"
                            />
                          </Link>

                          <button
                            className="w-75 mt-1 mb-2 p-1 border-0 btn-dark rounded"
                            onClick={() =>
                              book.hardcopy_qty > 1
                                ? toast.success("Successfully Borrowed")
                                : toast.error("Opps, Book Not Available")
                            }
                          >
                            Borrow Book
                          </button>
                        </div>
                        <div class="col-6 col-md-6 col-sm-12 pt-4">
                          <p>
                            Book Name : <b>{book.name}</b>
                          </p>
                          <p>
                            Author : <b>{book.author}</b>
                          </p>
                          <p>
                            Availability : <b>{book.hardcopy_qty}</b>
                          </p>
                          <p>
                            Pages : <b>{book.page_count}</b>
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
export default MainContent;
