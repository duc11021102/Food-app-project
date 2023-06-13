import React, {
    useState,
    useEffect,
    useReducer,
    useContext,
    useRef,
  } from "react";
import Card from "../UI/Card";
  import classes from './Login.module.css';
  import AuthContext from "../../store/auth-context";
  import Input from "../Input/Input";

  /****************Reducer****************/
const emailReducer = (state, action) => {
    //action
    if (action.type === "USER_INPUT") {
      return { value: action.val, isValid: action.val.includes("@") };
    }
    //action
    if (action.type === "INPUT_BLUR") {
      return { value: state.value, isValid: state.value.includes("@") };
    }
    return { value: "", isValid: false };
  };
  /****************Reducer****************/
  const passwordReducer = (state, action) => {
    //action
    if (action.type === "USER_INPUT") {
      return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    //action
    if (action.type === "INPUT_BLUR") {
      return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: "", isValid: false };
  };
  
  
  
  
  const Login = (props) => {



    const [formIsValid, setFormIsValid] = useState(false);
    // init state
    const initStateEmail = {
      value: "",
      isValid: null,
    };
    // init state
    const initStatePassword = {
      value: "",
      isValid: null,
    };
    // useReducer
    const [emailState, dispatchEmail] = useReducer(emailReducer, initStateEmail);
    // useReducer
    const [passwordState, dispatchPassword] = useReducer(
      passwordReducer,
      initStatePassword
    );
    //disconstruc : bất cứ khi nào giá trị thay đổi mà hiệu lực k thay đổi thì sẽ k chạy useEffect
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;
    // tạo biến context
    const ctx = useContext(AuthContext);
    // tạo ref
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
  
    





    //useEffect
    useEffect(() => {
      const identifier = setTimeout(() => {
        console.log("Checking form Valid");
        setFormIsValid(emailIsValid && passwordIsValid);
      }, 500);
      return () => {
        console.log("CLEANUP");
        clearTimeout(identifier);
      };
    }, [emailIsValid, passwordIsValid]);






  
    //xử lí sự kiện khi người dùng nhập
    const emailChangeHandler = (event) => {
      dispatchEmail({ type: "USER_INPUT", val: event.target.value }); // action === { type: "USER_INPUT", val: event.target.value }
    };
    // onBlur, sự kiện sảy ra khi người dùng bỏ focus ra khỏi phần tử
    const validateEmailHandler = () => {
      dispatchEmail({ type: "INPUT_BLUR" });
    };
  
    //xử lí sự kiện khi người dùng nhập
    const passwordChangeHandler = (event) => {
      dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    };
    // onBlur, sự kiện sảy ra khi người dùng bỏ focus ra khỏi phần tử
    const validatePasswordHandler = () => {
      dispatchPassword({ type: "INPUT_BLUR" });
    };






  
    //submit --- khi ấn login sẽ focus vào input đầu tiên chưa được nhập
    const submitHandler = (event) => {
      event.preventDefault();
      console.log(formIsValid);
      if (formIsValid === true) {
        ctx.onLoggin(emailState.value, passwordState.value);
      } else if (!emailIsValid) {
        emailInputRef.current.focus();
      } else {
        passwordInputRef.current.focus();
      }
    };
  





    return (
        <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <Input
            ref={emailInputRef}
            id="email"
            label="E-mail"
            type="email"
            value={emailState.value}
            isValid={emailIsValid}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          ></Input>
          <Input
            ref={passwordInputRef}
            id="password"
            label="Password"
            type="password"
            value={passwordState.value}
            isValid={passwordIsValid}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          ></Input>
          <div className={classes.actions}>
            <button type="submit" className={classes.btn}>
              Login
            </button>
          </div>
        </form>
        </Card>
    );
  };
  
  export default Login;
