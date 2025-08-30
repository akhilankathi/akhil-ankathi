import axios from "axios"
const APIURL = import.meta.env.VITE_APIURI
export const downloadResumeService = async () => {
    let res:any = axios.get(`${APIURL}/contact/downloadResume`)

    const blob = await res?.blob();
    const url = window.URL.createObjectURL(blob);

    // Trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = "Resume_Akhil_Ankathi_2025.docx";
    document.body.appendChild(link);
    link.click();
    link.remove();

    // Cleanup
    window.URL.revokeObjectURL(url);
}
