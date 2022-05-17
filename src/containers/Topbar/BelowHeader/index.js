import React from "react";
import { Layout, Popover} from 'antd';
import {useDispatch, useSelector} from "react-redux";
// import CustomScrollbars from "util/CustomScrollbars";
import UserInfo from "components/UserInfo";
import AppNotification from "components/AppNotification";
import { toggleCollapsedSideNav} from "../../../appRedux/actions/Setting";
import HorizontalNav from "../HorizontalNav";
import {Link} from "react-router-dom";

const {Header} = Layout;

const BelowHeader = () => {

  const dispatch = useDispatch();

  // const [ setSearchText] = useState('');
  // const locale = useSelector(({settings}) => settings.locale);
  const navCollapsed = useSelector(({settings}) => settings.navCollapsed);

  // const languageMenu = () => (
  //   <CustomScrollbars className="gx-popover-lang-scroll">
     
  //   </CustomScrollbars>);

  // const updateSearchChatUser = (evt) => {
  //   setSearchText(evt.target.value)
  // };

  return (
    <div className="gx-header-horizontal gx-header-horizontal-dark gx-below-header-horizontal">
      <div className="gx-header-horizontal-top">
        <div className="gx-container">
          <div className="gx-header-horizontal-top-flex">
         
          </div>
        </div>
      </div>


      <Header
        className="gx-header-horizontal-main">
        <div className="gx-container">
          <div className="gx-header-horizontal-main-flex">

            <div className="gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3">
              <i className="gx-icon-btn icon icon-menu"
                 onClick={() => {
                   dispatch(toggleCollapsedSideNav(!navCollapsed));
                 }}
              />
            </div>
            <Link to="/" className="gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo">
              <img alt="" src={require("assets/images/logo-white.png")}/></Link>
            <Link to="/" className="gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo">
              <img alt="" src={require("assets/images/logo-white.png")}/></Link>
           

            <ul className="gx-header-notifications gx-ml-auto">
              <li className="gx-notify">
                <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={<AppNotification/>}
                         trigger="click">
                  <span className="gx-pointer gx-status-pos gx-d-block "><i className="icon icon-notification"/></span>
                </Popover>
              </li>

           
              <li className="gx-user-nav"><UserInfo/></li>
            </ul>
          </div>
        </div>
      </Header>
      <div className="gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block">
        <div className="gx-container">
          <div className="gx-header-horizontal-nav-flex">
            <HorizontalNav/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowHeader;
