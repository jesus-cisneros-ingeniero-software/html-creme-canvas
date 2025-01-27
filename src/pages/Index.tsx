import DocumentHeader from "@/components/DocumentHeader";
import AdministrativeSection from "@/components/AdministrativeSection";
import DocumentDetails from "@/components/DocumentDetails";
import DocumentFooter from "@/components/DocumentFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <DocumentHeader />
          <AdministrativeSection />
          <DocumentDetails />
          <DocumentFooter />
        </div>
      </div>
    </div>
  );
};

export default Index;