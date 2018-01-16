export enum API_URL {
    LOGIN = '/login',
    LOGOUT = '/logout',


    MENU = '/cau-hinh/data-menu-json',
    TOOLS = '/cau-hinh/data-tool-json',
    CONSTANT = '/cau-hinh/data-constants',


    DOCTOR_WAITING_APPROVE = '/bac-sy/danh-sach-bac-sy-cho-duyet',
    DOCTOR_WAITING_APPROVE_APPROVE = '/bac-sy/duyet-thong-tin-bac-sy',

    DOCTOR_CASHOUT_HISTORY = '/bac-sy/lich-su-rut-tien-bac-sy',
    DOCTOR_CASHOUT_HISTORY_APPROVE = '/bac-sy/duyet-rut-tien-bac-sy',
    DOCTOR_CASHOUT_HISTORY_REFUSE = '/bac-sy/huy-rut-tien-bac-sy',

    DOCTOR_MADICINE_INFO = '/bac-sy/thong-tin-thuoc',
    DOCTOR_MADICINE_INFO_DETAIL = '/bac-sy/thong-tin-chi-tiet-thuoc',
    DOCTOR_MADICINE_INFO_ADD = '/bac-sy/them-thong-tin-thuoc',
    DOCTOR_MADICINE_INFO_EDIT = '/bac-sy/cap-nhat-thong-tin-thuoc',

    DOCTOR_HOSPITAL = '/bac-sy/danh-sach-benh-vien',

    PATIENT_MEDICAL_SCHEDULE = '/benh-nhan/danh-sach-hen-kham-benh',
    PATIENT_MEDICAL_SCHEDULE_LOGCALL = '/benh-nhan/log-call-bacsy-benhnhan',

    PATIENT_INFO = '/benh-nhan/thong-tin-benh-nhan',
    PATIENT_INFO_DETAIL = '/benh-nhan/thong-tin-chi-tiet-benh-nhan',

    PATIENT_HISTORY_PAYMENT = '/benh-nhan/lich-su-nap-tien'
}
