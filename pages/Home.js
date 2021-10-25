import Layout from './index' //Import Layout

export default () => (
    <Layout className='aStyle'>
       <img className="img" src="./gif.gif" alt="Company Logo" /> {/*Logo image*/}
        <style jsx>{`
            .img{
                height: 110px;
                width: auto;
            },
        `}</style>
    </Layout>
)