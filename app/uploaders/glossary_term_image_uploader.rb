class GlossaryTermImageUploader < CarrierWave::Uploader::Base
  
  include CarrierWave::MiniMagick

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  version :thumb do
    process resize_to_fit: [240, 135]
  end
end