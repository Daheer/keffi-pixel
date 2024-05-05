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
    case "print_banner":
      return "Print Banner";
    case "print_iv_card":
      return "Print Invitation Card";
    case "print_flyer":
      return "Print Flyer";
    case "print_calendar":
      return "Print Calendar";
    case "print_jotter":
      return "Print Jotter";
    case "web_graphics":
      return "Web & Graphics Design";
    case "print_sticker":
      return "Print Sticker";
    default:
      return null;
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
      return null;
  }
}

export function getAvailableServices() {
  return ["print_on_a4_card", "print_on_a3_card", "print_on_a4_paper", "print_on_a3_paper", "print_business_card", "print_id_card"]
}

export function getAllServices() {
  return ["print_on_a4_card", "print_on_a3_card", "print_on_a4_paper", "print_on_a3_paper", "print_business_card", "print_id_card", "print_banner", "print_iv_card", "print_flyer", "print_calendar", "print_jotter", "print_sticker", "web_graphics"]
}

import { supabase } from "./supabase";

export async function db_getServicePrice(id) {
  const { data, error } = await supabase.from('services').select('price').eq('id', id)
  console.log(data);
  return data[0].price;
}

export async function db_getServiceDescription(id) {
  const { data, error } = await supabase.from('services').select('description').eq('id', id)
  console.log(data)
  return data[0].description;
}