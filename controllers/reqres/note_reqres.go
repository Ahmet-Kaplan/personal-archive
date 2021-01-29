package reqres

import (
	"github.com/jaeyo/personal-archive/common/http"
	"github.com/jaeyo/personal-archive/models"
)

type NotesResponse struct {
	OK         bool             `json:"ok"`
	Notes      []*models.Note   `json:"notes"`
	Pagination *http.Pagination `json:"pagination"`
}

type CreateNoteRequest struct {
	Title               string   `json:"title" validate:"required,max=1024"`
	Content             string   `json:"content" validate:"required,min=1"`
	ReferenceArticleIDs []int64  `json:"referenceArticleIDs"`
	ReferenceWebURLs    []string `json:"referenceWebUrls"`
}

type NoteResponse struct {
	OK   bool         `json:"ok"`
	Note *models.Note `json:"note"`
}

type UpdateNoteTitleRequest struct {
	Title string `json:"title" validate:"required,min=1,max=128"`
}
