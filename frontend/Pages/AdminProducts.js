
import React, { useState, useEffect } from "react";
import { Product } from "@/entities/Product";
import { User } from "@/entities/User";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { createPageUrl } from "@/utils";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    image_url: '',
    category: 'firearms',
    quantity_available: 0,
    condition: 'Field-Tested',
    origin_country: '',
    featured: false,
  });

  useEffect(() => {
    checkAdmin();
    loadProducts();
  }, []);

  const checkAdmin = async () => {
    try {
      const user = await User.me();
      if (user.role !== 'admin') {
        window.location.href = createPageUrl('Shop');
      }
    } catch (error) {
      window.location.href = createPageUrl('Shop');
    }
  };

  const loadProducts = async () => {
    setIsLoading(true);
    const data = await Product.list("-created_date");
    setProducts(data);
    setIsLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      quantity_available: parseInt(formData.quantity_available),
    };

    if (editingProduct) {
      await Product.update(editingProduct.id, productData);
    } else {
      await Product.create(productData);
    }

    setShowDialog(false);
    setEditingProduct(null);
    loadProducts();
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description || '',
      price: product.price,
      image_url: product.image_url || '',
      category: product.category,
      quantity_available: product.quantity_available || 0,
      condition: product.condition,
      origin_country: product.origin_country || '',
      featured: product.featured || false,
    });
    setShowDialog(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this item from the manifest?')) {
      await Product.delete(id);
      loadProducts();
    }
  };
  
  const resetForm = () => {
     setFormData({
        name: '',
        description: '',
        price: 0,
        image_url: '',
        category: 'firearms',
        quantity_available: 0,
        condition: 'Field-Tested',
        origin_country: '',
        featured: false,
      });
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold text-gray-100 font-stencil">Manage Contraband</h1>
        <Button
          onClick={() => {
            setEditingProduct(null);
            resetForm();
            setShowDialog(true);
          }}
          className="bg-amber-800 hover:bg-amber-700 text-white transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Asset
        </Button>
      </div>

      <div className="grid gap-6">
        {products.map((product) => (
          <Card key={product.id} className="p-6 border border-gray-700 shadow-lg bg-gray-800/50">
            <div className="flex gap-6">
              <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-700 flex-shrink-0">
                {product.image_url ? (
                  <img src={product.image_url} alt={product.name} className="w-full h-full object-cover opacity-70" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 font-stencil">[REDACTED]</div>
                )}
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-200 mb-2 font-stencil">{product.name}</h3>
                <p className="text-gray-400 mb-3 line-clamp-2">{product.description}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  <span className="text-gray-400">Price: <span className="font-semibold text-gray-300">${product.price}</span></span>
                  <span className="text-gray-400">Qty: <span className="font-semibold text-gray-300">{product.quantity_available}</span></span>
                  <span className="text-gray-400">Category: <span className="font-semibold text-gray-300">{product.category}</span></span>
                  <span className="text-gray-400">Condition: <span className="font-semibold text-gray-300">{product.condition}</span></span>
                  {product.featured && <span className="bg-amber-800 text-amber-200 px-2 py-1 rounded">Featured</span>}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleEdit(product)}
                  className="bg-gray-700 border-gray-600 hover:bg-gray-600"
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-900/50 border-red-800 text-red-400 hover:bg-red-900"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-800 border-gray-700 text-gray-300">
          <DialogHeader>
            <DialogTitle className="font-stencil text-gray-100">{editingProduct ? 'Update Asset' : 'Log New Asset'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Asset Name</Label>
              <Input id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="bg-gray-700 border-gray-600" />
            </div>
            <div>
              <Label htmlFor="description">Description/Intel</Label>
              <Textarea id="description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} rows={3} className="bg-gray-700 border-gray-600" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Price (Display Only)</Label>
                <Input id="price" type="number" step="0.01" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} required className="bg-gray-700 border-gray-600" />
              </div>
              <div>
                <Label htmlFor="quantity_available">Quantity</Label>
                <Input id="quantity_available" type="number" value={formData.quantity_available} onChange={(e) => setFormData({...formData, quantity_available: e.target.value})} required className="bg-gray-700 border-gray-600" />
              </div>
            </div>
             <div className="grid sm:grid-cols-2 gap-4">
                 <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                        <SelectTrigger className="bg-gray-700 border-gray-600"><SelectValue /></SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700 text-gray-300">
                            <SelectItem value="firearms" className="focus:bg-gray-700">Firearms</SelectItem>
                            <SelectItem value="field-gear" className="focus:bg-gray-700">Field Gear</SelectItem>
                            <SelectItem value="intel" className="focus:bg-gray-700">Intel</SelectItem>
                            <SelectItem value="sustenance" className="focus:bg-gray-700">Sustenance</SelectItem>
                            <SelectItem value="medical" className="focus:bg-gray-700">Medical</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div>
                    <Label htmlFor="condition">Condition</Label>
                    <Select value={formData.condition} onValueChange={(value) => setFormData({...formData, condition: value})}>
                        <SelectTrigger className="bg-gray-700 border-gray-600"><SelectValue /></SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700 text-gray-300">
                            <SelectItem value="Factory New" className="focus:bg-gray-700">Factory New</SelectItem>
                            <SelectItem value="Field-Tested" className="focus:bg-gray-700">Field-Tested</SelectItem>
                            <SelectItem value="Battle-Scarred" className="focus:bg-gray-700">Battle-Scarred</SelectItem>
                            <SelectItem value="Relic" className="focus:bg-gray-700">Relic</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div>
              <Label htmlFor="origin_country">Country of Origin</Label>
              <Input id="origin_country" value={formData.origin_country} onChange={(e) => setFormData({...formData, origin_country: e.target.value})} required className="bg-gray-700 border-gray-600" />
            </div>
            <div>
              <Label htmlFor="image_url">Image URL</Label>
              <Input id="image_url" value={formData.image_url} onChange={(e) => setFormData({...formData, image_url: e.target.value})} placeholder="https://..." className="bg-gray-700 border-gray-600" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="featured" checked={formData.featured} onCheckedChange={(checked) => setFormData({...formData, featured: checked})} />
              <Label htmlFor="featured" className="cursor-pointer">Top Secret / Featured</Label>
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setShowDialog(false)} className="border-gray-600 hover:bg-gray-700">Cancel</Button>
              <Button type="submit" className="bg-amber-800 hover:bg-amber-700 text-white">{editingProduct ? 'Update' : 'Log'} Asset</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
