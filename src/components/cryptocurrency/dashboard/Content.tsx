import React from 'react';

const Content: React.FC = (): JSX.Element => {
    return (
        <div className="contentWrapper">
            <div className="card">
          <div className="card-body p-3">
            <div id="dataTable_wrapper" className="dataTables_wrapper no-footer"><div className="dataTables_length" id="dataTable_length"><label>Show <select name="dataTable_length" aria-controls="dataTable" className="form-select form-select-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div><div id="dataTable_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="dataTable" /></label></div><table className="data-table w-100 dataTable no-footer" id="dataTable" role="grid" aria-describedby="dataTable_info">
              <thead>
                            <tr role="row"><th className="sorting sorting_asc" tabIndex={Number(0)} aria-controls="dataTable" rowSpan={Number(1)} colSpan={Number(1)} aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: "43px;" }}>Name</th><th className="sorting" tabIndex={Number(0)} aria-controls="dataTable" rowSpan={Number(1)} colSpan={Number(1)} aria-label="Position: activate to sort column ascending" style={{ width: "60px;" }}>Position</th><th className="sorting" tabIndex={Number(0)} aria-controls="dataTable" rowSpan={Number(1)} colSpan={Number(1)} aria-label="Office: activate to sort column ascending" style={{ width: "39px;" }}>Office</th><th className="sorting" tabIndex={Number(0)} aria-controls="dataTable" rowSpan={Number(1)} colSpan={Number(1)} aria-label="Salary: activate to sort column ascending" style={{ width: "41px;" }}>Salary</th></tr>
              </thead>
              <tbody>
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
              <tr className="odd">
                  <td className="sorting_1">Airi Satou</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>$162,700</td>
                </tr><tr className="even">
                  <td className="sorting_1">Ashton Cox</td>
                  <td>Junior Technical Author</td>
                  <td>San Francisco</td>
                  <td>$86,000</td>
                </tr><tr className="odd">
                  <td className="sorting_1">Bradley Greer</td>
                  <td>Software Engineer</td>
                  <td>London</td>
                  <td>$132,000</td>
                </tr><tr className="even">
                  <td className="sorting_1">Bradley Greer</td>
                  <td>Software Engineer</td>
                  <td>London</td>
                  <td>$132,000</td>
                </tr><tr className="odd">
                  <td className="sorting_1">Brielle Williamson</td>
                  <td>Integration Specialist</td>
                  <td>New York</td>
                  <td>$372,000</td>
                </tr><tr className="even">
                  <td className="sorting_1">Caesar Vance</td>
                  <td>Pre-Sales Support</td>
                  <td>New York</td>
                  <td>$106,450</td>
                </tr><tr className="odd">
                  <td className="sorting_1">Caesar Vance</td>
                  <td>Pre-Sales Support</td>
                  <td>New York</td>
                  <td>$106,450</td>
                </tr><tr className="even">
                  <td className="sorting_1">Cedric Kelly</td>
                  <td>Senior Javascript Developer</td>
                  <td>Edinburgh</td>
                  <td>$433,060</td>
                </tr><tr className="odd">
                  <td className="sorting_1">Charde Marshall</td>
                  <td>Regional Director</td>
                  <td>San Francisco</td>
                  <td>$470,600</td>
                </tr><tr className="even">
                  <td className="sorting_1">Colleen Hurst</td>
                  <td>Javascript Developer</td>
                  <td>San Francisco</td>
                  <td>$205,500</td>
                </tr></tbody>
            </table><div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 28 entries</div><div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate"><a className="paginate_button previous disabled" aria-controls="dataTable" data-dt-idx="0" tabIndex={Number(-1)} id="dataTable_previous">Previous</a><span><a className="paginate_button current" aria-controls="dataTable" data-dt-idx="1" tabIndex={Number(0)}>1</a><a className="paginate_button " aria-controls="dataTable" data-dt-idx="2" tabIndex={Number(0)}>2</a><a className="paginate_button " aria-controls="dataTable" data-dt-idx="3" tabIndex={Number(0)}>3</a></span><a className="paginate_button next" aria-controls="dataTable" data-dt-idx="4" tabIndex={Number(0)} id="dataTable_next">Next</a></div></div>
          </div>
        </div>
        </div>
    )
}

export default Content;