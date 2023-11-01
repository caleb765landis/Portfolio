import toast from 'react-hot-toast';

export const copyToClipboard = (data="copied text", successText="Copied to clipboard!") => {
    navigator.clipboard.writeText(data)
    toast.success(successText)
}