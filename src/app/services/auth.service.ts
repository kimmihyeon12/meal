import { Injectable } from "@angular/core";
import { SupabaseService } from "./supabase.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly supabaseService: SupabaseService) { }

  async login(email: string, nickname: string) {

    const { data, error } = await this.supabaseService.getSupabase()
      .from('users_dev')
      .insert({ email, nickname })
      .select()

    const { id } = data![0]

    // 토큰 발급
    const token = this.supabaseService.createJwtToken(id)
  }
}