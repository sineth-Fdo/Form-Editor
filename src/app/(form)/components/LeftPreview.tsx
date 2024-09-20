import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopBar from "./tabs/_components/TopBar";
import ContentTab from "./tabs/ContentTab";

const LeftPreview = () => {

  return (
    <div className=" min-w-[320px] h-[100vh] bg-[#ffffff] pt-2 px-3">
      <TopBar />

      <div className=" w-[100%] h-10 mb-10">
        <Tabs defaultValue="content" className="w-[100%]">
          <TabsList className="w-[100%] flex justify-between rounded-sm">
            <TabsTrigger value="content" className="text-[13px] rounded-sm">
              Content
            </TabsTrigger>
            <TabsTrigger value="design" className="text-[13px] rounded-sm">
              Design
            </TabsTrigger>
            <TabsTrigger value="share" className="text-[13px] rounded-sm">
              Share
            </TabsTrigger>
            <TabsTrigger value="replies" className="text-[13px] rounded-sm">
              Replies
            </TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            <ContentTab />
          </TabsContent>
          <TabsContent value="design"></TabsContent>
          <TabsContent value="share"></TabsContent>
          <TabsContent value="replies"></TabsContent>
        </Tabs>

      </div>
    </div>
  );
};

export default LeftPreview;
