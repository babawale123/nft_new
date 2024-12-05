import SaleOffers from './SaleOffer';
import CallToAction from './CallToAction';
import TopNFTs from './TopNft';

const NFTPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="flex flex-col md:flex-row justify-between p-6 gap-6">
        <SaleOffers />
        <CallToAction />
        <TopNFTs />
      </div>
    </div>
  );
}
export default NFTPage;
