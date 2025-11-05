import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount)
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('es-ES').format(num)
}

export function formatPercentage(num: number): string {
  return `${num.toFixed(1)}%`
}

export function formatKWH(amount: number): string {
  return `${formatNumber(amount)} kWh/año`
}