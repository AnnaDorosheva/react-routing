import s from "./AppBar.module.css";
import { NavItem } from "./AppBar.styled";
import {
  AiFillAlipaySquare,
  AiFillDollarCircle,
  AiFillCalendar,
  AiFillEdit,
  AiFillSketchSquare,
} from "react-icons/ai";

const navItems = [
  { href: "dashboard", text: "Dashboard", icon: AiFillAlipaySquare },
  { href: "sales", text: "Sales", icon: AiFillDollarCircle },
  { href: "report", text: "Report", icon: AiFillCalendar },
  { href: "feedback", text: "Feedback", icon: AiFillEdit },
  { href: "customers", text: "Customers", icon: AiFillSketchSquare },
];
const AppBar = () => {
  return (
    <div className={s.appBar}>
      <nav className={s.nav}>
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem to={href} key={href}>
            <Icon className={s.icon} size={16} />
            {text}
          </NavItem>
        ))}
      </nav>
    </div>
  );
};

export default AppBar;
