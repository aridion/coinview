import Layout from "../components/Layout";
import Prices from "../components/Prices";
const Index = (props) => (
  <Layout>
    <h1>Welcome to coinview</h1>
    <Prices bpi={props.bpi} />
  </Layout>
);

Index.getInitialProps = async function () {
  const result = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const coinData = await result.json();

  return {
    bpi: coinData,
  };
};
export default Index;
