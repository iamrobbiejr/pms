import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const UserDashboard = () => {
  return (
    <>

      <button className="btn btn-primary rounded-pill col-2 flex-right mb-4">Create Proposal</button>


      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              My Propoposals
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th>P_Number</th>
                    <th>Details</th>
                    <th className="text-center">Status</th>

                    <th className="text-center">State</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
<td>123456</td>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, cum cumque,
                      dignissimos dolor eaque inventore, non nostrum
                      omnis placeat quidem quis quisquam similique sint sunt tempore veniam voluptatibus. Consequuntur, dolores.
                    </td>
                    <td className="text-center">
                      Pending Evaluation
                    </td>

                    <td className="text-center">
                     Pending Approval
                    </td>
                    <td>
                      <button className="btn btn-primary rounded-pill">View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>123456</td>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, cum cumque,
                      dignissimos dolor eaque inventore, non nostrum
                      omnis placeat quidem quis quisquam similique sint sunt tempore veniam voluptatibus. Consequuntur, dolores.
                    </td>
                    <td className="text-center">
                      Pending Evaluation
                    </td>

                    <td className="text-center">
                      Pending Approval
                    </td>
                    <td>
                      <button className="btn btn-primary rounded-pill">View</button>
                    </td>
                  </tr>

                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UserDashboard
