
import classes from './Modal.module.css';
import React, { Fragment } from "react";
import  ReactDOM  from "react-dom";



const Backdrop = (props) => {
    return <div onClick={props.onClick} className={classes.backdrop}></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
return <Fragment>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClick}></Backdrop>, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
</Fragment>
}
export default Modal;