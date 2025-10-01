import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck } from "lucide-react";

export default function ProductCard({ product }) {
  const conditionColors = {
    "Factory New": "bg-green-800/50 border-green-600 text-green-300",
    "Field-Tested": "bg-yellow-800/50 border-yellow-600 text-yellow-300",
    "Battle-Scarred": "bg-orange-800/50 border-orange-600 text-orange-300",
    "Relic": "bg-red-800/50 border-red-600 text-red-300",
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={createPageUrl(`ProductDetail?id=${product.id}`)}>
        <Card className="overflow-hidden border border-gray-700 shadow-lg hover:shadow-amber-900/20 transition-all duration-300 group bg-gray-800/50">
          <div className="relative aspect-square overflow-hidden bg-gray-700">
            {product.image_url ? (
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                [REDACTED]
              </div>
            )}
            {product.featured && (
              <Badge className="absolute top-3 left-3 bg-amber-700 hover:bg-amber-600 text-white border-0 shadow-lg">
                Top Secret
              </Badge>
            )}
            {product.quantity_available === 0 && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <Badge variant="destructive" className="bg-red-900/80 border-red-700 text-red-300">
                  M.I.A.
                </Badge>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
              <Badge className={conditionColors[product.condition] || 'bg-gray-700'}>
                {product.condition}
              </Badge>
            </div>
          </div>
          
          <div className="p-5">
            <div className="mb-3">
              <h3 className="font-semibold text-gray-200 mb-1 group-hover:text-amber-400 transition-colors line-clamp-1 font-stencil tracking-wide">
                {product.name}
              </h3>
              <p className="text-sm text-gray-400 line-clamp-2">{product.description}</p>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-gray-700">
              <div>
                <span className="text-2xl font-bold text-gray-300">${product.price}</span>
                <span className="text-sm text-gray-500 ml-1">USD (1953)</span>
              </div>
              
              <div className="text-amber-600 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-xs font-semibold">CLASSIFIED</span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}