import building from "./building.svg";
import wallet from "./wallet2.svg";
import globe from "./globe.svg";
import add from "./plus-circle.svg";
import card from "./credit-card.svg";
import salary from "./cash-coin.svg";
import cart from "./cart4.svg";
import shop from "./shop.svg";
import home from "./house.svg";
import phone from "./phone.svg";
import taxi from "./taxi-front.svg";
import smile from "./emoji-smile.svg";
import tool from "./wrench.svg";

const storage = {
  iconsForIncome: {
    1: building,
    2: globe,
    3: add,
    4: salary,
  },
  iconsForAccount: {
    1: card,
    2: wallet,
    3: building,
  },
  iconsForExpenses: {
    1: cart,
    2: shop,
    3: home,
    4: phone,
    5: taxi,
    6: smile,
    7: tool,
  },
};

export default storage;
