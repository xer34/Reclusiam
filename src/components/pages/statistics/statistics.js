import React, { Component } from "react";
import style from "./index.css";
import LazyHero from "react-lazy-hero";

class statistics extends Component {
  render() {
    return (
      <div className={style.background}>
        <div className="container db-social">
          <LazyHero
            parallaxOffset="100"
            opacity="0.1"
            imageSrc="https://geekandsundry.com/wp-content/uploads/2017/06/igor-sid-13-ultramarine-vs-plague-marine-box-cover.jpg"
          >
            <h1 className={style.headerName}>Alexander Lewis</h1>
          </LazyHero>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-11">
                <div className="widget head-profile has-shadow">
                  <div className="widget-body pb-0">
                    <div className="row d-flex align-items-center">
                      <div className="col-xl-4 col-md-4 d-flex justify-content-lg-start justify-content-md-start justify-content-center">
                        <ul>
                          <li>
                            <div className="counter">46</div>
                            <div className="heading">Wins</div>
                          </li>
                          <li>
                            <div className="counter">30</div>
                            <div className="heading">Losses</div>
                          </li>
                          <li>
                            <div className="counter">216</div>
                            <div className="heading">ITC Ranking</div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-4 col-md-4 d-flex justify-content-center">
                        <div className="image-default" />

                        <div className="infos">
                          <h2 />
                          <div className="location" />
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 d-flex justify-content-lg-end justify-content-md-end justify-content-center" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2>Average Win Rate: Primary Faction</h2>
  <div className="progress">
    <div className="progress-bar bg-success" role="progressbar" style={{width: '55%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
  </div>
  <h2>Average Win Rate: Secondary Faction</h2>
  <div className="progress">
    <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
  </div>
  <h2>Games Lost at 3rd Round</h2>
  <div className="progress">
    <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
  </div>
  <h2>Worst Matchup (Loss Rate): Thousand Sons</h2>
  <div className="progress">
    <div className="progress-bar bg-danger" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
  </div>
</div>
          </div>

        </div>
        <div>


          <div className="container-fluid gedf-wrapper">
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <div className="h5">Xer34</div>
                    <div className="h7 text-muted">
                      Fullname : Alexander Lewis
                    </div>
                    <div className="h7">
                      Captain General of the Legio Custodes
                    </div>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="h6 text-muted">Primary Faction</div>
                      <div className="h5">Adeptus Custodes</div>
                    </li>
                    <li className="list-group-item">
                      <div className="h6 text-muted">ITC Faction Ranking</div>
                      <div className="h5">57</div>
                    </li>
                    <li className="list-group-item">
                      "Even in death, I still serve"
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 gedf-main">
                <div className="card gedf-card">
                  <div className="card-header">
                    <ul
                      className="nav nav-tabs card-header-tabs"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="posts-tab"
                          data-toggle="tab"
                          href="/posts"
                          role="tab"
                          aria-controls="posts"
                          aria-selected="true"
                        >
                          Current Top 10
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div className="tab-content" id="myTabContent">
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Points</th>
                            <th scope="col">Events</th>
                          </tr>
                        </thead>
                        <tbody>

                          <tr class="table-primary">
                            <th scope="row">Primary</th>
                            <td>Brandon</td>
                            <td>Grant</td>
                            <td>620.14</td>
                            <td>4 of 4</td>
                          </tr>
                          <tr class="table-secondary">
                            <th scope="row">Secondary</th>
                            <td>Nick</td>
                            <td>Nanavati</td>
                            <td>615.92</td>
                            <td>4 of 4</td>
                          </tr>
                          <tr class="table-primary">
                            <th scope="row">Primary</th>
                            <td>Trent</td>
                            <td>Northington</td>
                            <td>614.64</td>
                            <td>4 of 4</td>
                          </tr>
                          <tr class="table-secondary">
                            <th scope="row">Secondary</th>
                            <td>Alex</td>
                            <td>Harrison</td>
                            <td>608.02</td>
                            <td>4 of 4</td>
                          </tr>
                          <tr class="table-primary">
                            <th scope="row">Primary</th>
                            <td>TJ</td>
                            <td>Lanigan</td>
                            <td>596.18</td>
                            <td>4 of 4</td>
                          </tr>
                          <tr class="table-secondary">
                            <th scope="row">Secondary</th>
                            <td>Daniel</td>
                            <td>Sansone</td>
                            <td>592.75</td>
                            <td>4 of 4</td>
                          </tr>
                          <tr class="table-primary">
                            <th scope="row">Primary</th>
                            <td>Nick</td>
                            <td>Rose</td>
                            <td>591.75</td>
                            <td>4 of 4</td>
                          </tr>
                          <tr class="table-secondary">
                            <th scope="row">Secondary</th>
                            <td>Eric</td>
                            <td>Trock</td>
                            <td>584.63</td>
                            <td>4 of 4</td>
                          </tr>
                          <tr class="table-primary">
                            <th scope="row">Primary</th>
                            <td>Nicolas</td>
                            <td>Weiss</td>
                            <td>583.98</td>
                            <td>4 of 4</td>
                          </tr>
                          <tr class="table-secondary">
                            <th scope="row">Secondary</th>
                            <td>Steven</td>
                            <td>Pampreen</td>
                            <td>583.68</td>
                            <td>4 of 4</td>
                          </tr>

                        </tbody>
                      </table>
                      <div
                        className="tab-pane fade"
                        id="images"
                        role="tabpanel"
                        aria-labelledby="images-tab"
                      >
                        <div className="form-group">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="customFile"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="customFile"
                            >
                              Upload image
                            </label>
                          </div>
                        </div>
                        <div className="py-4" />
                      </div>
                    </div>
                    <div className="btn-toolbar justify-content-between">
                      <div className="btn-group">
                        <button type="submit" className="btn btn-primary">
                          share
                        </button>
                      </div>
                      <div className="btn-group" />
                    </div>
                  </div>
                </div>
  
           
              </div>
              <div className="col-md-3">
                <div className="card gedf-card">
                  <div className="card-body">
                    <h5 className="card-title">Average Win Rate</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Astra Militarum Primary
                    </h6>
                    <p className="card-text">53.35%</p>
                    <a href="/" className="card-link">
                      Link to BattleScribe List
                    </a><br />
                    <a href="/" className="card-link">
                      Link to BattleTimer List
                    </a>
                  </div>
                </div>
                <div className="card gedf-card">
                  <div className="card-body">
                    <h5 className="card-title">Unit Most Taken</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Showing in 78.5% of Lists Created by Xer34
                    </h6>
                    <p className="card-text">
                      Army: Adeptus Custodes
                    </p>
                    <p className='card-text'>Troops: Vertus Praetors(3)</p>
                    <a href="/" className="card-link">
                      Games Workshop Link
                    </a><br />
                    <a href="/" className="card-link">
                      This Units Tactics
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default statistics;
