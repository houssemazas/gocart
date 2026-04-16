import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "Touchgram - Admin",
    description: "Touchgram - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
