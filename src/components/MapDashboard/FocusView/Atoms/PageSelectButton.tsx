interface PageSelectButtonProps {
    page: string
    active: boolean
    onClick: () => void
}

function PageSelectButton({ page, active, onClick }: PageSelectButtonProps) {
    return (
        <button 
            className={`${active ? 'font-bold' : ''}`} 
            onClick={onClick}
        >
            {page}
        </button>
    )
}

export default PageSelectButton
