class PaginationHelper {
	constructor(collection, itemsPerPage) 
  {
	 this.collection = collection;
    this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
    return this.collection.length;
	}
	pageCount() {
        return Math.ceil(this.collection.length/this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
    if (Math.ceil(this.collection.length/this.itemsPerPage)-1 < pageIndex || pageIndex < 0) return -1;
	  if (Math.ceil(this.collection.length/this.itemsPerPage)-1 > pageIndex) return (this.itemsPerPage);
    if (Math.ceil(this.collection.length/this.itemsPerPage)-1 == pageIndex) 
    {
      if (Math.floor(this.collection.length/this.itemsPerPage) != this.collection.length/this.itemsPerPage)
     {return (this.collection.length - (Math.floor(this.collection.length/this.itemsPerPage))*this.itemsPerPage);}
      else return this.itemsPerPage;
    }
	}
	pageIndex(itemIndex) {
	if (itemIndex >= 0 && itemIndex < this.collection.length) return Math.floor(itemIndex/this.itemsPerPage);
    else return -1;
	}
}