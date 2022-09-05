# Lexir | Frontend Developer Challenge

---

### Name: Fanourios

### Surname: Chatziathanasiou

#### [Github](https://github.com/Fanourios-Chatziathanasiou) [Linkedin](https://www.linkedin.com/in/fanourios-chatziathanasiou/)

---

# <center>View: Product Page <center/>

To run the code in dev environment:

```bash
  yarn run dev
```

or [visit the page deployed on Vercel](https://github.com/Fanourios-Chatziathanasiou)

---

### <u>Personal Notes - Comments</u>

First, by seeing the figma design my approach was to break the design into blocks to segmentate my code as much as i can. What came first to my mind is that the page consists of 3 parts: 1) the Header(as mentioned on Figma, which is a top menu bar), 2) the Main content about the product and 3) the footer.

![page](https://i.ibb.co/DfW8DrH/chrome-2ac-Bp2i-ZI7.png)

With **NextJS** you have the abillity to create a **Layout** component that will wrap the page and it should consist of elements that dont need to be re-rendered. By the looks of the page these would be the **header ( Menu )** and the **Footer**. That way we improve the performance of our application and make a much better user experience.

```javascript
//Layout.tsx
interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: any): JSX.Element => {
  return (
    <>
      <main className="flex flex-col items-center p-0 relative   max-w-[128rem] m-auto">
        <Header />
        <Navbar />
        {children}
        <LexirFooter />
      </main>
    </>
  );
};

export default Layout;

```

Inside each component I broke each component into more segments-components that I have put into the ```/components``` folder.

My general approach as to HTML-CSS things was to match figma's design when the page is extended to it's max width-(1280px). Figma's guidelines dont seem to mention a responsive design but i've worked on it myself. I used some breakpoints that I added on tailwind.config (with the prefix "m" reffering to "my" so mvsm means "my breakpoint very small" ) so i can change the design of the page accordingly to fit all the screen dimensions that devtools suggest (ex Iphone SE).

```javascript

module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue, tsx}",
    "./src/**/*",
    "./components/**/*",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        sourceSerif: ["Source Serif Pro", "serif"],
      },
      maxWidth: {
        large: "128.0rem",
      },
      boxShadow: {
        small: "0px 4px 6px rgba(0, 0, 0, 0.06)",
      },
      screens: {
        mxl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        mlg: { max: "1153px" },
        // => @media (max-width: 1023px) { ... }
        mmd: { max: "973px" },
        // => @media (max-width: 767px) { ... }
        msm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        mvsm: { max: "500px" },
        // => @media (max-width: 500px) { ... }
        m2vsm: { max: "420px" },
        // => @media (max-width: 420px) { ... }
        reversemsm: "639px",
        // => @media (min-width: 639px) { ... }
      },
    },
  },

  plugins: [],
};
```

In general the goal for most components to be fluid I set the max-width as the width that figma suggested for a component, and then the width to be 100% to match the current size. For example for a button:

```HTML
    <button
            type="button"
            className="flex flex-row justify-center bg-[#2D2D2D] rounded-[0.4rem] border border-[#F2F2F2] border-solid  w-[100%] max-w-[24.4rem] py-[1.2rem]  mlg:self-center"
          >
            <span className="text-white font-Lato font-[700] text-[1.6rem] leading-[2.5rem]">
              Suggest a Brand
            </span>
    </button>
```

---

### <u>Extra Features - Typescript( Some Dynamic Behavior) and HTML/CSS</u>

#### Extra menu for small screen devices (Typescript and media queries)

As for styling other than Responsive and Fluid Design mentioned above, there is some added hover animation on the  Header Component ( top menu ) as well as a simple "hamburger menu " for small devices. The hamburger menu appears with a media query depending on the screen size.

![hamburger menu image](https://i.ibb.co/FxyGLfJ/chrome-Ued8s-EIn3-N.png)

With the use of ```useWindowDimensions()``` custom hook located at ```/components/tools``` we are able to get the dimensions of the Window and define wether to show the "hamburger menu" or the original style for desktop-type screens.

By using a simple css media query we dont solve every problem regarding the menu. Some of these are:

* **Q:** What if we open the mobile menu and then resize the window? **A:** -The menu does not hide by itself.

* **Q:**(Considering that the above problem was solved) What if we open the mobile menu , resize to a desktop screen and then resize to mobile again? **A:**-The menu will be at a open state rather than the ideal-closed state.

To solve these problems, Typescript comes handy.

First we attach a Ref to the component that contains the menu for mobile devices. Then all we have to do is handle each of the above situation,

```javascript
  //Header.tsx
  //custom dimensions hook component
  const width = useWindowDimensions();
  //reset the menu if screen changes to desktop mode
  useEffect(() => {
    //the size we declared as the breakpoint to make the menu icon appear instead of the whole menu.
    if (width > 639) {
      hideMenu();
    }
  }, [width]);

  //toggling on and off the dropdown by adding and removing the hidden className
  //attribute
  const toggleMenu = () => {
    menuRef?.current?.className.includes(" hidden ")
      ? (menuRef.current.className = menuRef.current.className.replace(
          " hidden ",
          ""
        ))
      : menuRef?.current?.className
      ? (menuRef.current.className += " hidden ")
      : "";
  };

  const hideMenu = () => {
    if (menuRef?.current?.className.includes(" hidden ") === false) {
      menuRef.current.className += " hidden ";
    }
  };

  //Start the page with closed dropdown component
  useEffect(() => {
    hideMenu();
  }, []);
```

#### Dynamic product price By incrementing and decrementing the amount of units (Typescript)

For this, what we have to use states as variables to dynamically render the components when the user increases or decreases the amount of products.

```javascript
  //ProductHighlight.tsx
  //initial state for the amount of products the user wants to add to cart.
  const [amount, setAmount] = useState<number>(1);
  //the price of one unit. not needed to add it as state. could be provided from an api call or be initialized in ,for example, getServerSideProps
  const unitPrice: number = 115.165;
  //Products price as of total. We declare it as string to make use of the .toFixed() method so we only have 2 decimals.
  const [productsPrice, setProductsPrice] = useState<string>(
    unitPrice.toFixed(2)
  );

  const increment = (): void => {
    setAmount((prevstate) => prevstate + 1);
  };
  
  const decrement = (): void => {
    //prevent from "hacky approaches to change the amount like javascript from the browser".
    ////Defensive programming approach.
    amount < 1 ? setAmount(1) : ""
    //prevent from decrementing below 1
    amount === 1 ? "" : setAmount((prevstate) => prevstate - 1);
  };
  // whenever the amount changes , calculate the sum total of price.
  useEffect(() => {
    setProductsPrice((amount * unitPrice).toFixed(2));
  }, [amount]);
```

#### Add to cart onClick event - Display a Snackbar element

![snackBar Image](https://i.ibb.co/1Q6hq7V/chrome-2-J0edo-Pytq.png)

For this component I used the MUI component Library. To install

```bash
 yarn add @mui/material @emotion/react @emotion/styled
```

At ```components/snackBar/CustomizedAddtoCartWithSnackbar.tsx``` is located the add to cart button. My approach here is to maintain TailwindCSS utility classes as much as possible but use MUI's component that I need.

I copy pasted one of [material's snackbars](https://mui.com/material-ui/react-snackbar/#main-content) into the customizedSnackbar and then i replaced some of its components but kept the functionalities. For example i replaced the ```<Button/>``` with ```<button>``` the ```<Stack></Stack>``` with ```<div></div>``` , added classNames to configure CSS etc.

Now, all we have to do is add the component to ```ProductHightlight.tsx``` where we previously created our sum total price state component in order to pass it down, like so :

```javascript


        <CustomAddtoCartWithSnackBar
          productsPrice={productsPrice}
        ></CustomAddtoCartWithSnackBar>
```

---

### Final Thoughts
