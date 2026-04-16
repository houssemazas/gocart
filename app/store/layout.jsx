import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "Touchgram - Store Dashboard",
    description: "Touchgram - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
