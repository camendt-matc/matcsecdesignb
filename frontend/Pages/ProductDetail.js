import React, { useState, useEffect } from "react";
import { Product } from "@/entities/Product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertTriangle, MapPin, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function ProductDetail() {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const conditionColors = {
    "Factory New": "bg-green-800/50 border-green-600 text-green-300",
    "Field-Tested": "bg-yellow-800/50 border-yellow-600 text-yellow-300",
    "Battle-Scarred": "bg-orange-800/50 border-orange-600 text-orange-300",
    "Relic": "bg-red-800/50 border-red-600 text-red-300",
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
      const data = await Product.list();
      const foundProduct = data.find(p => p.id === productId);
      setProduct(foundProduct);
      setSelectedImage(foundProduct?.image_url);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <Skeleton className="aspect-square rounded-lg bg-gray-700" />
          <div className="space-y-6">
            <Skeleton className="h-12 w-3/4 bg-gray-700" />
            <Skeleton className="h-24 w-full bg-gray-700" />
            <Skeleton className="h-16 w-1/2 bg-gray-700" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4 font-stencil">Intel Not Found</h2>
        <Button onClick={() => navigate(createPageUrl("Shop"))} variant="outline" className="text-gray-300 border-gray-600 hover:bg-gray-700">
          Return to The Exchange
        </Button>
      </div>
    );
  }

  const allImages = [product.image_url, ...(product.images || [])].filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-700 shadow-2xl border border-gray-600">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover opacity-80"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500 font-stencil">[IMAGE REDACTED]</div>
            )}
          </div>
          
          {allImages.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                    selectedImage === img ? "border-amber-600 scale-95" : "border-gray-700 hover:border-gray-500 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-100 mb-2 font-stencil tracking-wider">{product.name}</h1>
                <Badge variant="secondary" className="text-sm bg-gray-700 text-gray-300 border-gray-600">
                  {product.category?.replace(/-/g, ' ').toUpperCase()}
                </Badge>
              </div>
              {product.featured && (
                <Badge className="bg-amber-700 text-white font-stencil">Top Secret</Badge>
              )}
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">{product.description}</p>
          </div>
          
          <div className="border-t border-b border-gray-700 py-6 space-y-4">
            <div className="flex items-center gap-4">
              <Shield className="w-6 h-6 text-amber-500" />
              <div>
                  <p className="text-sm text-gray-500">Condition</p>
                  <p className={`font-semibold ${conditionColors[product.condition]?.replace('bg-', 'text-').split(' ')[0]}`}>{product.condition}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-amber-500" />
              <div>
                  <p className="text-sm text-gray-500">Country of Origin</p>
                  <p className="font-semibold text-gray-300">{product.origin_country}</p>
              </div>
            </div>
          </div>


          <div className="border-t border-b border-gray-700 py-6">
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-bold text-gray-200">${product.price}</span>
              <span className="text-xl text-gray-500">USD (1953 Est.)</span>
            </div>
          </div>

          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 text-center space-y-3">
              <div className="flex items-center justify-center gap-3 text-red-300">
                  <AlertTriangle className="w-6 h-6"/>
                  <h3 className="text-xl font-bold font-stencil">Acquisition Disabled</h3>
              </div>
              <p className="text-red-400/80">This item is for historical display only. All transactions are disabled for this project.</p>
          </div>

        </div>
      </div>
    </div>
  );
}