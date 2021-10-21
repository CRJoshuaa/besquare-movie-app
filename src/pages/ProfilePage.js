import React from "react";
import "./ProfilePage.css";
import { Modal, Button } from "react-bootstrap";
import {
  BsGlobe,
  BsPhone,
  BsShieldLock,
  BsBoxArrowRight,
} from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";

const iconStyle = { marginRight: "0.9em" };

function ProfilePage() {
  // watch history
  const [watch, setWatch] = React.useState(false);
  const watchClose = () => setWatch(false);
  const watchShow = () => setWatch(true);
  // search history
  const [search, setSearch] = React.useState(false);
  const searchClose = () => setSearch(false);
  const searchShow = () => setSearch(true);
  // password
  const [pswd, setPswd] = React.useState(false);
  const pswdClose = () => setPswd(false);
  const pswdShow = () => setPswd(true);
  // logout
  const [logout, setLogout] = React.useState(false);
  const logoutClose = () => setLogout(false);
  const logoutShow = () => setLogout(true);

  return (
    <div className="profile-wrapper">
      <div className="profile-wrapper-bg filter-bg">
        <div>
          <p className="profile-wrapper-header">Profile</p>
        </div>

        <div className="profile-details-wrapper">
          <div>
            <button className="profile-pic"></button>
          </div>
          <div className="profile-details">
            <h1 style={{ letterSpacing: 0.5 }}>Amirul Hazwan</h1>
            <p>amirul@besquare.com.my</p>
            <p>Malaysia</p>
          </div>
        </div>
      </div>

      <div className="profile-setting">
        <div className="settings-wrapper">
          <button className="setting-item1">
            <BsGlobe style={iconStyle} />
            Language
          </button>
          <div className="setting-item2">English</div>
          <button className="setting-item3">
            <BsPhone style={iconStyle} />
            Phone
          </button>
          <div className="setting-item4">+(60)11-123-1234</div>
          <button className="setting-item5">
            <MdOutlineNotificationsActive style={iconStyle} />
            Notification
          </button>

          <div className="setting-item6">
            <BsShieldLock style={iconStyle} />
            Privacy
          </div>
          <button className="privacy-item1" onClick={watchShow}>
            Clear watch history
          </button>
          <Modal show={watch} onHide={watchClose}>
            <Modal.Header>
              <Modal.Title>Privacy</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to clear your watch history?</Modal.Body>
            <Modal.Footer>
              <Button className="btn-close" onClick={watchClose}>
                Close
              </Button>
              <Button className="btn-save" onClick={watchClose}>
                Clear
              </Button>
            </Modal.Footer>
          </Modal>

          <button className="privacy-item2" onClick={searchShow}>
            Clear search history
          </button>
          <Modal show={search} onHide={searchClose}>
            <Modal.Header>
              <Modal.Title>Privacy</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to clear your search history?</Modal.Body>
            <Modal.Footer>
              <Button className="btn-close" onClick={searchClose}>
                Close
              </Button>
              <Button className="btn-save" onClick={searchClose}>
                Clear
              </Button>
            </Modal.Footer>
          </Modal>

          <button className="privacy-item3" onClick={pswdShow}>
            Change password
          </button>
          <Modal show={pswd} onHide={pswdClose}>
            <Modal.Header>
              <Modal.Title>Privacy</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to change your password?</Modal.Body>
            <Modal.Footer>
              <Button className="btn-close" onClick={pswdClose}>
                Close
              </Button>
              <Button className="btn-save" onClick={pswdClose}>
                Change Password
              </Button>
            </Modal.Footer>
          </Modal>
          <button className="setting-item7" onClick={logoutShow}>
            <BsBoxArrowRight style={iconStyle} />
            Log Out
          </button>
          <Modal show={logout} onHide={logoutClose}>
            <Modal.Header>
              <Modal.Title>Logging Out</Modal.Title>
            </Modal.Header>
            <Modal.Body>You logged out succesfullyl</Modal.Body>
            <Modal.Footer>
              <Button className="btn-close" onClick={logoutClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
