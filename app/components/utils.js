export function getServiceName(service) {
  switch (service) {
    case "print_on_a4_card":
      return "Print on A4 Card";
    case "print_on_a3_card":
      return "Print on A3 Card";
    case "print_on_a4_paper":
      return "Print on A4 Paper";
    case "print_on_a3_paper":
      return "Print on A3 Paper";
    case "print_business_card":
      return "Print Business Card";
    case "print_id_card":
      return "Print ID Card";
    default:
      return "Print on A4 Card";
  }
}

export function getServicePrice(service) {
  switch (service) {
    case "print_on_a4_card":
      return 120;
    case "print_on_a3_card":
      return 240;
    case "print_on_a4_paper":
      return 80;
    case "print_on_a3_paper":
      return 160;
    case "print_business_card":
      return 20;
    case "print_id_card":
      return 350;
    default:
      return 80;
  }
}

export function getAvailableServices() {
  return ["print_on_a4_card", "print_on_a3_card", "print_on_a4_paper", "print_on_a3_paper", "print_business_card", "print_id_card"]
}