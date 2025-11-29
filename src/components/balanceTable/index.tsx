import React from 'react';
import './balanceTable.scss';

const BalanceTable: React.FC = () => {
  return (
    <table className="balance-table-wrapper">
      <thead>
        <tr>
          <th className="th-general">
            <div className="th-header-text">Amount</div>
          </th>
          <th className="th-hidden">
            <div className="th-header-text">​</div>
          </th>
          <th className="th-center">
            <div className="th-header-text">Destination</div>
          </th>
          <th className="th-last">
            <div className="th-header-text">Arrive by</div>
          </th>
        </tr>
      </thead>
      <tbody className="⚙" id="payouts_history">
      <tr>
        <td className="td-first">
          <div className="cell-text">$27,296.03</div>
        </td>
        <td className="td-second">
          <div className="cell-text">
            <div className="cell-text-inner">
              <span className="cell-text-badge">Upcoming</span>
              <svg
                aria-hidden="true"
                width={12}
                height={12}
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(108, 118, 136)"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 10.5A4.5 4.5 0 0 0 10.5 6c0-2.487-2.007-4.5-4.5-4.5a4.5 4.5 0 1 0 0 9ZM6 12a6 6 0 0 0 6-6c0-3.314-2.678-6-6-6a6 6 0 1 0 0 12Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.75 2.75a.75.75 0 0 1 .75.75v2.825l1.51.907a.75.75 0 1 1-.77 1.286L5.363 7.393A.75.75 0 0 1 5 6.75V3.5a.75.75 0 0 1 .75-.75Z"
                />
              </svg>
            </div>
          </div>
        </td>
        <td className="td-third">
          <div className="cell-text">
            <div className="cell-text-badge">—</div>
          </div>
        </td>
        <td className="td-fourth">
          <div className="cell-text">
            <div className="cell-text-badge">Dec 3</div>
          </div>
        </td>
      </tr>
      <tr>
        <td className="td-first">
          <div className="cell-text">$32,697.86</div>
        </td>
        <td className="td-second">
          <div className="cell-text">
            <div className="cell-text-inner">
              <span className="cell-text-badge">Upcoming</span>
              <svg
                aria-hidden="true"
                width={12}
                height={12}
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(108, 118, 136)"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 10.5A4.5 4.5 0 0 0 10.5 6c0-2.487-2.007-4.5-4.5-4.5a4.5 4.5 0 1 0 0 9ZM6 12a6 6 0 0 0 6-6c0-3.314-2.678-6-6-6a6 6 0 1 0 0 12Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.75 2.75a.75.75 0 0 1 .75.75v2.825l1.51.907a.75.75 0 1 1-.77 1.286L5.363 7.393A.75.75 0 0 1 5 6.75V3.5a.75.75 0 0 1 .75-.75Z"
                />
              </svg>
            </div>
          </div>
        </td>
        <td className="td-third">
          <div className="cell-text">
            <div className="cell-text-badge">—</div>
          </div>
        </td>
        <td className="td-fourth">
          <div className="cell-text">
            <div className="cell-text-badge">Dec 2</div>
          </div>
        </td>
      </tr>
      <tr>
        <td className="td-first">
          <div className="cell-text">$38,940.63</div>
        </td>
        <td className="td-second">
          <div className="cell-text">
            <div className="cell-text-inner">
              <span className="cell-text-badge">Upcoming</span>
              <svg
                aria-hidden="true"
                width={12}
                height={12}
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(108, 118, 136)"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 10.5A4.5 4.5 0 0 0 10.5 6c0-2.487-2.007-4.5-4.5-4.5a4.5 4.5 0 1 0 0 9ZM6 12a6 6 0 0 0 6-6c0-3.314-2.678-6-6-6a6 6 0 1 0 0 12Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.75 2.75a.75.75 0 0 1 .75.75v2.825l1.51.907a.75.75 0 1 1-.77 1.286L5.363 7.393A.75.75 0 0 1 5 6.75V3.5a.75.75 0 0 1 .75-.75Z"
                />
              </svg>
            </div>
          </div>
        </td>
        <td className="td-third">
          <div className="cell-text">
            <div className="cell-text-badge">—</div>
          </div>
        </td>
        <td className="td-fourth">
          <div className="cell-text">
            <div className="cell-text-badge">Dec 1</div>
          </div>
        </td>
      </tr>
      <tr className="clickable">
        <td className="td-first">
          <div className="cell-text">$27,879.75</div>
        </td>
        <td className="td-second">
          <div className="cell-text">
            <div className="cell-text-inner paid">
              <span className="cell-text-badge">Paid</span>
            </div>
          </div>
        </td>
        <td className="td-third">
          <div className="cell-text">
            <div className="cell-text-badge">TRANSFERWISE EUROPE SA/NV&nbsp;&nbsp;•••• 7511</div>
          </div>
        </td>
        <td className="td-fourth">
          <div className="cell-text">
            <div className="cell-text-badge">Nov 24</div>
          </div>
        </td>
      </tr>
      <tr className="clickable">
        <td className="td-first">
          <div className="cell-text">$29,828.76</div>
        </td>
        <td className="td-second">
          <div className="cell-text">
            <div className="cell-text-inner paid">
              <span className="cell-text-badge">Paid</span>
            </div>
          </div>
        </td>
        <td className="td-third">
          <div className="cell-text">
            <div className="cell-text-badge">TRANSFERWISE EUROPE SA/NV&nbsp;&nbsp;•••• 7511</div>
          </div>
        </td>
        <td className="td-fourth">
          <div className="cell-text">
            <div className="cell-text-badge">Nov 25</div>
          </div>
        </td>
      </tr>
      <tr className="clickable">
        <td className="td-first">
          <div className="cell-text">$23,833.33</div>
        </td>
        <td className="td-second">
          <div className="cell-text">
            <div className="cell-text-inner paid">
              <span className="cell-text-badge">Paid</span>
            </div>
          </div>
        </td>
        <td className="td-third">
          <div className="cell-text">
            <div className="cell-text-badge">TRANSFERWISE EUROPE SA/NV&nbsp;&nbsp;•••• 7511</div>
          </div>
        </td>
        <td className="td-fourth">
          <div className="cell-text">
            <div className="cell-text-badge">Nov 26</div>
          </div>
        </td>
      </tr>
      <tr className="clickable">
        <td className="td-first">
          <div className="cell-text">$10,793.76</div>
        </td>
        <td className="td-second">
          <div className="cell-text">
            <div className="cell-text-inner paid">
              <span className="cell-text-badge">Paid</span>
            </div>
          </div>
        </td>
        <td className="td-third">
          <div className="cell-text">
            <div className="cell-text-badge">TRANSFERWISE EUROPE SA/NV&nbsp;&nbsp;•••• 7511</div>
          </div>
        </td>
        <td className="td-fourth">
          <div className="cell-text">
            <div className="cell-text-badge">Nov 27</div>
          </div>
        </td>
      </tr>
      <tr className="clickable">
        <td className="td-first">
          <div className="cell-text">$6,598.92</div>
        </td>
        <td className="td-second">
          <div className="cell-text">
            <div className="cell-text-inner paid">
              <span className="cell-text-badge">Paid</span>
            </div>
          </div>
        </td>
        <td className="td-third">
          <div className="cell-text">
            <div className="cell-text-badge">TRANSFERWISE EUROPE SA/NV&nbsp;&nbsp;•••• 7511</div>
          </div>
        </td>
        <td className="td-fourth">
          <div className="cell-text">
            <div className="cell-text-badge">Nov 28</div>
          </div>
        </td>
      </tr>
      {/*<tr className="sail-table-row ⚙ as-45 as-76 as-l4 as-ai ⚙xfg3m6">*/}
      {/*  <td className="⚙ rs-2 as-jr as-7d as-kl as-k5 as-kp as-km ⚙sq9rnw">*/}
      {/*    <div*/}
      {/*      className="⚙ rs-0 rs-1 as-jv as-jw as-jx as-2w as-2x as-a6 as-h as-w as-x as-35 as-2n as-4p as-jy as-jz as-17 as-45 as-k0 as-k1 as-k2 as-k3 ⚙246it">*/}
      {/*      <div className="⚙ as-17 as-45 ⚙27g56x">*/}
      {/*        <a*/}
      {/*          href="javascript:;"*/}
      {/*          tabIndex={0}*/}
      {/*          className="⚙ rs-2 rs-1 as-1i as-1j as-1k as-6c as-6y as-21 as-22 as-7c as-16 as-hv as-45 as-17 as-3y as-l5 ⚙16r66dw"*/}
      {/*        >*/}
      {/*          <div className="⚙ rs-0 as-kq as-k4 as-kr as-jx as-w as-1m ⚙1tvoza8">*/}
      {/*            <div className="⚙ as-kq as-k4 as-kr as-k6 as-k5 as-6r ⚙5t9c6w">*/}
      {/*              <span className="⚙ rs-1 as-36 as-16 ⚙1jcxzh9">*/}
      {/*                <span className="editable" data-index={0} data-type="paid">*/}
      {/*                  $27,879.75*/}
      {/*                </span>*/}
      {/*              </span>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </a>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </td>*/}
      {/*  <td className="⚙ rs-2 as-jr as-7d as-js as-k5 as-kp as-km ⚙yg7uf3">*/}
      {/*    <div*/}
      {/*      className="⚙ rs-0 rs-1 as-jv as-jw as-jx as-2w as-2x as-a6 as-h as-w as-x as-35 as-2n as-4p as-jy as-jz as-17 as-45 ⚙1eyq6ei">*/}
      {/*      <div className="⚙ as-17 as-45 ⚙27g56x">*/}
      {/*        <a*/}
      {/*          href="javascript:;"*/}
      {/*          tabIndex={-1}*/}
      {/*          className="⚙ rs-2 rs-1 as-1i as-1j as-1k as-6c as-6y as-21 as-22 as-ko as-16 as-hv as-45 as-17 as-3y as-l5 ⚙48xnmg"*/}
      {/*        >*/}
      {/*          <div className="⚙ rs-0 as-kq as-k4 as-kr as-jx as-w as-1m ⚙1tvoza8">*/}
      {/*            <div className="⚙ as-kq as-k4 as-kr as-k6 as-k5 as-3w as-3x ⚙bwr8av">*/}
      {/*              <span*/}
      {/*                className="⚙ rs-1 rs-0 as-y as-z as-g3 as-5h as-x as-ks as-ak as-kt as-ku as-kv as-kw as-w as-1n as-kx as-l6 as-l7 as-l8 as-l9 ⚙p72s74"*/}
      {/*                style={{fontWeight: 400}}*/}
      {/*              >*/}
      {/*                <span className="badge-paid" data-index={0}>*/}
      {/*                  Paid*/}
      {/*                </span>*/}
      {/*              </span>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </a>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </td>*/}
      {/*  <td className="⚙ rs-2 as-jr as-l2 as-7d as-js as-k5 as-l3 as-km ⚙su9003">*/}
      {/*    <div*/}
      {/*      className="⚙ rs-0 rs-1 as-jv as-jw as-jx as-2w as-2x as-a6 as-h as-w as-x as-35 as-2n as-4p as-jy as-jz as-17 as-45 ⚙1eyq6ei">*/}
      {/*      <div className="⚙ as-17 as-45 ⚙27g56x">*/}
      {/*        <a*/}
      {/*          href="javascript:;"*/}
      {/*          tabIndex={-1}*/}
      {/*          className="⚙ rs-2 rs-1 as-1i as-1j as-1k as-6c as-6y as-21 as-22 as-ko as-16 as-hv as-45 as-17 as-3y as-l5 ⚙48xnmg"*/}
      {/*        >*/}
      {/*          <div className="⚙ rs-0 as-kq as-k4 as-kr as-jx as-w as-1m ⚙1tvoza8">*/}
      {/*            <div className="⚙ as-kq as-k4 as-kr as-k6 as-k5 as-3w as-3x ⚙bwr8av">*/}
      {/*              <div className="Box-root" style={{pointerEvents: "none"}}>*/}
      {/*                <div*/}
      {/*                  className="Box-root Flex-flex Flex-alignItems--center Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"*/}
      {/*                  style={{marginLeft: "-8px", marginTop: "-8px"}}*/}
      {/*                >*/}
      {/*                  <div*/}
      {/*                    className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"*/}
      {/*                    style={{pointerEvents: "auto"}}*/}
      {/*                  >*/}
      {/*                    <span*/}
      {/*                      className="editable"*/}
      {/*                      data-index={0}*/}
      {/*                      data-type="address"*/}
      {/*                    >*/}
      {/*                      TRANSFERWISE EUROPE SA/NV*/}
      {/*                    </span>*/}
      {/*                  </div>*/}
      {/*                  <div*/}
      {/*                    className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8"*/}
      {/*                    style={{pointerEvents: "auto"}}*/}
      {/*                  >*/}
      {/*                    <span*/}
      {/*                      className="editable"*/}
      {/*                      data-index={0}*/}
      {/*                      data-type="number"*/}
      {/*                    >*/}
      {/*                      •••• 7511*/}
      {/*                    </span>*/}
      {/*                  </div>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </a>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </td>*/}
      {/*  <td className="⚙ rs-2 as-jr as-7d as-kl as-k5 as-l3 as-km ⚙1swrde1">*/}
      {/*    <div*/}
      {/*      className="⚙ rs-0 rs-1 as-jv as-jw as-jx as-2w as-2x as-a6 as-h as-w as-x as-35 as-2n as-4p as-jy as-jz as-17 as-45 ⚙1eyq6ei">*/}
      {/*      <div className="⚙ as-17 as-45 ⚙27g56x">*/}
      {/*        <a*/}
      {/*          href="javascript:;"*/}
      {/*          tabIndex={-1}*/}
      {/*          className="⚙ rs-2 rs-1 as-1i as-1j as-1k as-6c as-6y as-21 as-22 as-6v as-16 as-hv as-45 as-17 as-3y as-l5 ⚙1kt8xe8"*/}
      {/*        >*/}
      {/*          <div className="⚙ rs-0 as-kq as-k4 as-kr as-jx as-w as-1m ⚙1tvoza8">*/}
      {/*            <div className="⚙ as-kq as-k4 as-kr as-k6 as-k5 as-3w as-3x ⚙bwr8av">*/}
      {/*              <span*/}
      {/*                style={{fontVariantNumeric: "tabular-nums"}}*/}
      {/*                className="editable"*/}
      {/*                data-index={3}*/}
      {/*                data-type="date"*/}
      {/*              >*/}
      {/*                Nov 28*/}
      {/*              </span>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </a>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </td>*/}
      {/*</tr>*/}
      </tbody>
    </table>
  );
};

export default BalanceTable;
