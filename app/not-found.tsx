import Error404 from '@/components/sub-components/Error404';



export default function NotFound() {
  return (
    <div className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar-track-textDark/20 scrollbar-thumb-textDark/60 scrollbar-thin scrollbar-thumb-rounded-full">
      <Error404 />
    </div>
  );
}