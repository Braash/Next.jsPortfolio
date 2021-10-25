import Header from 'components/Header.js' //Import Header.

//This component 
const Layout = (props) => (
    <div>
        <div className='layoutStyle'>
            <img className="img" src="./logo.png" alt="Company Logo" /> {/*Logo image*/}
            <h5 className='header'>(DEVELOPER PORTFOLIO)</h5> {/*Logo image*/}
            <Header /> {/*Header Component.*/}
            {props.children} {/*All the children that are in every instance of the Layout component.*/}
            <img className="img" src="./09.jpeg" alt="Company Logo" /> {/*GIF*/}
        </div>
        <style global-jsx>
        {`    .layoutStyle{
                    margin: 25px;
                    padding: 20px;
                    border-radius: 2px;
                    border: 2px solid grey;
                    background-color: rgb(236, 236, 236);
                    },
                body{
                    background-color: rgb(236, 236, 236); 
                }
        `}</style>
        <style jsx>
                {`
                .img{
                    height: 110px;
                    width: auto;
                },
                .header{
                    font-size: 1em; 
                    font-family: Arial; 
                }
                `}
        </style>
    </div>
)

/*const Final = () => {
    <div>
        <Layout />
        <img className="img" src="./gif.gif" alt="Company Logo" />
    </div>
}*/

export default Layout; //Export Layout component - This is the componenet 
