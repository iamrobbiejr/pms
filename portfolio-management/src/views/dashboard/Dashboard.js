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

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Proposals
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>User</th>
                    <th className="text-center">Industry</th>
                    <th>Proposal Details</th>
                    <th className="text-center">Budget</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                     FinTech
                    </td>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur corporis dignissimos,
                      dolores eaque impedit ipsam libero nam quasi sequi!
                      Assumenda cum distinctio dolorem eveniet laboriosam optio quas, rem repellat?
                    </td>
                    <td className="text-center">
                     $1000
                    </td>
                    <td>
                      <button className="btn btn-primary rounded-pill">View</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      FinTech
                    </td>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur corporis dignissimos,
                      dolores eaque impedit ipsam libero nam quasi sequi!
                      Assumenda cum distinctio dolorem eveniet laboriosam optio quas, rem repellat?
                    </td>
                    <td className="text-center">
                      $1000
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

export default Dashboard
