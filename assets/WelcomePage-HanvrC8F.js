import{u as e,N as i,j as t}from"./index-RnUNKsJ-.js";const o="/TaskPro-blended1-frontend/assets/boy-zfFl38_I.png",n="/TaskPro-blended1-frontend/assets/icons-s-mI6NSt.svg",r=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
`,s=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 473px;
  }
`,a=e.img`
  width: 124px;
  height: 124px;

  @media (min-width: 768px) {
    width: 162px;
    height: 162px;
  }
`,p=e.div`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 42px;
  margin-top: 14px;

  @media (min-width: 768px) {
    margin-top: 24px;
    height: 60px;
  }
`,c=e.svg`
  width: 40px;
  height: 40px;
  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`,l=e.h1`
  color: #161616;
  font-size: 28px;
  font-family: Poppins;
  font-weight: 600;
  letter-spacing: -1.12px;

  @media (min-width: 768px) {
    font-size: 40px;
    letter-spacing: -1.6px;
  }
`,x=e.p`
  margin-top: 24px;
  margin-bottom: 48px;
  text-align: center;
  color: #161616;
  font-size: 14px;
  font-family: "Poppins";
  line-height: 1.28;
  letter-spacing: -0.28px;
`,d=e(i)`
  width: calc(100% - 40px);
  padding: 14px;
  margin-bottom: 14px;
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  font-family: "Poppins";
  font-weight: 500;
  letter-spacing: -0.28px;

  border-radius: 8px;
  background: #161616;

  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    width: 344px;
  }
`,g=e(i)`
  font-family: "Poppins";
  text-decoration: none;
  color: #161616;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  padding: 6px 12px;

  cursor: pointer;

  transition: all 150ms linear;

  &:hover {
    opacity: 0.8;
    border-radius: 8px;

    background: #161616;
    color: #ffffff;
  }
`,h=()=>t.jsx(r,{children:t.jsxs(s,{children:[t.jsx(a,{src:o,alt:"boy with laptop"}),t.jsxs(p,{children:[t.jsx(c,{children:t.jsx("use",{href:n+"#icon-logo"})}),t.jsx(l,{children:"Task Pro"})]}),t.jsx(x,{children:"Supercharge your productivity and take control of your tasks with Task Pro - Don`t wait, start achieving your goals now!"}),t.jsx(d,{to:"/auth/register",children:"Registration"}),t.jsx(g,{to:"/auth/login",children:"Log In"})]})}),f=()=>t.jsx(t.Fragment,{children:t.jsx(h,{})});export{f as default};
